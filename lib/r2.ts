import {
  PutObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getR2Client, getR2Bucket, publicUrlFor } from "./r2-client";

export type DocumentCategory = "annual" | "quarterly";

export type FinancialDocument = {
  key: string;
  name: string;
  size: number;
  uploadedAt: string;
};

const CATEGORIES: DocumentCategory[] = ["annual", "quarterly"];

function prefixFor(category: DocumentCategory): string {
  return `financial-statements/${category}/`;
}

/**
 * Keys are shaped `financial-statements/{category}/{timestamp}/{encoded title}.pdf`.
 * The title lives in the key (not S3 object metadata) so listing needs a single
 * ListObjectsV2 call instead of a HeadObject per document.
 */
function parseKey(
  key: string
): { category: DocumentCategory; title: string } | null {
  for (const category of CATEGORIES) {
    const prefix = prefixFor(category);
    if (!key.startsWith(prefix)) continue;

    const rest = key.slice(prefix.length); // "{timestamp}/{encoded title}.pdf"
    const slashIndex = rest.indexOf("/");
    if (slashIndex === -1) return { category, title: rest };

    const encodedTitleWithExt = rest.slice(slashIndex + 1);
    const encodedTitle = encodedTitleWithExt.replace(/\.pdf$/i, "");
    let title = encodedTitleWithExt;
    try {
      title = decodeURIComponent(encodedTitle) || encodedTitleWithExt;
    } catch {
      // Malformed encoding — fall back to the raw segment.
    }
    return { category, title };
  }
  return null;
}

export function keyBelongsToKnownCategory(key: string): boolean {
  return parseKey(key) !== null;
}

export async function listFinancialDocuments(
  category: DocumentCategory
): Promise<FinancialDocument[]> {
  const prefix = prefixFor(category);
  const result = await getR2Client().send(
    new ListObjectsV2Command({ Bucket: getR2Bucket(), Prefix: prefix })
  );

  return (result.Contents ?? [])
    .filter((obj) => obj.Key && obj.Key !== prefix)
    .map((obj) => {
      const parsed = parseKey(obj.Key!);
      return {
        key: obj.Key!,
        name: parsed?.title ?? obj.Key!.slice(prefix.length),
        size: obj.Size ?? 0,
        uploadedAt: obj.LastModified?.toISOString() ?? "",
      };
    })
    .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
}

export async function uploadFinancialDocument(
  category: DocumentCategory,
  title: string,
  body: Buffer,
  contentType: string
): Promise<string> {
  const key = `${prefixFor(category)}${Date.now()}/${encodeURIComponent(
    title
  )}.pdf`;
  await getR2Client().send(
    new PutObjectCommand({
      Bucket: getR2Bucket(),
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  return key;
}

export async function getDownloadUrl(key: string): Promise<string> {
  const parsed = parseKey(key);
  const disposition = parsed
    ? `attachment; filename="${parsed.title.replace(/["\\]/g, "")}.pdf"`
    : undefined;

  const publicUrl = publicUrlFor(key);
  if (publicUrl) return publicUrl;

  const command = new GetObjectCommand({
    Bucket: getR2Bucket(),
    Key: key,
    ResponseContentDisposition: disposition,
  });
  return getSignedUrl(getR2Client(), command, { expiresIn: 600 });
}
