import { NextRequest, NextResponse } from "next/server";
import {
  DocumentCategory,
  listFinancialDocuments,
  uploadFinancialDocument,
} from "@/lib/r2";

const CATEGORIES: ReadonlySet<string> = new Set(["annual", "quarterly"]);
const MAX_FILE_SIZE = 4 * 1024 * 1024; // Vercel serverless functions cap request bodies around 4.5MB.

function isCategory(value: unknown): value is DocumentCategory {
  return typeof value === "string" && CATEGORIES.has(value);
}

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  if (!isCategory(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  try {
    const documents = await listFinancialDocuments(category);
    return NextResponse.json({ documents });
  } catch (error) {
    console.error("Failed to list financial documents", error);
    return NextResponse.json(
      { error: "Failed to load documents" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const expectedPassword = process.env.DOCS_UPLOAD_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json(
      { error: "Uploads are not configured" },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const category = formData.get("category");
  const password = formData.get("password");
  const title = formData.get("title");
  const file = formData.get("file");

  if (!isCategory(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  if (typeof password !== "string" || password !== expectedPassword) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const trimmedTitle = typeof title === "string" ? title.trim() : "";
  if (!trimmedTitle) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  if (trimmedTitle.length > 150) {
    return NextResponse.json(
      { error: "Title must be 150 characters or fewer" },
      { status: 400 }
    );
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json(
      { error: "Only PDF files are allowed" },
      { status: 400 }
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "File is too large (max 4MB)" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    await uploadFinancialDocument(category, trimmedTitle, buffer, file.type);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to upload financial document", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
