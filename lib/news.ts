import { randomUUID } from "crypto";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getR2Bucket, getR2Client, isNotFoundError, publicUrlFor } from "./r2-client";

const INDEX_KEY = "news-and-notice/index.json";
const DOCUMENTS_PREFIX = "news-and-notice/documents/";

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  documentKey: string | null;
  createdAt: string;
};

async function readIndex(): Promise<NewsItem[]> {
  try {
    const result = await getR2Client().send(
      new GetObjectCommand({ Bucket: getR2Bucket(), Key: INDEX_KEY })
    );
    const text = await result.Body?.transformToString();
    if (!text) return [];
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (isNotFoundError(error)) return [];
    throw error;
  }
}

async function writeIndex(items: NewsItem[]): Promise<void> {
  await getR2Client().send(
    new PutObjectCommand({
      Bucket: getR2Bucket(),
      Key: INDEX_KEY,
      Body: Buffer.from(JSON.stringify(items, null, 2)),
      ContentType: "application/json",
    })
  );
}

export async function listNewsItems(): Promise<NewsItem[]> {
  const items = await readIndex();
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addNewsItem(params: {
  title: string;
  description: string;
  file?: { buffer: Buffer; contentType: string } | null;
}): Promise<NewsItem> {
  const id = `${Date.now()}-${randomUUID().slice(0, 8)}`;
  let documentKey: string | null = null;

  if (params.file) {
    documentKey = `${DOCUMENTS_PREFIX}${id}/${encodeURIComponent(
      params.title
    )}.pdf`;
    await getR2Client().send(
      new PutObjectCommand({
        Bucket: getR2Bucket(),
        Key: documentKey,
        Body: params.file.buffer,
        ContentType: params.file.contentType,
      })
    );
  }

  const item: NewsItem = {
    id,
    title: params.title,
    description: params.description,
    documentKey,
    createdAt: new Date().toISOString(),
  };

  const items = await readIndex();
  items.push(item);
  await writeIndex(items);

  return item;
}

export function isKnownNewsDocumentKey(key: string): boolean {
  return key.startsWith(DOCUMENTS_PREFIX);
}

export async function getNewsDocumentDownloadUrl(
  documentKey: string,
  title: string
): Promise<string> {
  const publicUrl = publicUrlFor(documentKey);
  if (publicUrl) return publicUrl;

  const command = new GetObjectCommand({
    Bucket: getR2Bucket(),
    Key: documentKey,
    ResponseContentDisposition: `attachment; filename="${title.replace(
      /["\\]/g,
      ""
    )}.pdf"`,
  });
  return getSignedUrl(getR2Client(), command, { expiresIn: 600 });
}
