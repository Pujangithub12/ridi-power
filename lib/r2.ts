import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export type DocumentCategory = "annual" | "quarterly";

export type FinancialDocument = {
  key: string;
  name: string;
  size: number;
  uploadedAt: string;
};

let client: S3Client | null = null;

function getClient(): S3Client {
  if (client) return client;

  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error(
      "Missing Cloudflare R2 credentials. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY."
    );
  }

  client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
  return client;
}

function getBucket(): string {
  const bucket = process.env.R2_BUCKET_NAME;
  if (!bucket) {
    throw new Error("Missing R2_BUCKET_NAME environment variable.");
  }
  return bucket;
}

function prefixFor(category: DocumentCategory): string {
  return `financial-statements/${category}/`;
}

export function keyBelongsToCategory(
  key: string,
  category: DocumentCategory
): boolean {
  return key.startsWith(prefixFor(category));
}

export async function listFinancialDocuments(
  category: DocumentCategory
): Promise<FinancialDocument[]> {
  const prefix = prefixFor(category);
  const result = await getClient().send(
    new ListObjectsV2Command({ Bucket: getBucket(), Prefix: prefix })
  );

  return (result.Contents ?? [])
    .filter((obj) => obj.Key && obj.Key !== prefix)
    .map((obj) => ({
      key: obj.Key!,
      name: obj.Key!.slice(prefix.length),
      size: obj.Size ?? 0,
      uploadedAt: obj.LastModified?.toISOString() ?? "",
    }))
    .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
}

export async function uploadFinancialDocument(
  category: DocumentCategory,
  fileName: string,
  body: Buffer,
  contentType: string
): Promise<string> {
  const key = `${prefixFor(category)}${fileName}`;
  await getClient().send(
    new PutObjectCommand({
      Bucket: getBucket(),
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  return key;
}

export async function getDownloadUrl(key: string): Promise<string> {
  const publicBase = process.env.R2_PUBLIC_URL;
  if (publicBase) {
    return `${publicBase.replace(/\/$/, "")}/${key}`;
  }

  const command = new GetObjectCommand({ Bucket: getBucket(), Key: key });
  return getSignedUrl(getClient(), command, { expiresIn: 600 });
}
