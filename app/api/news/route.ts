import { NextRequest, NextResponse } from "next/server";
import { addNewsItem, listNewsItems } from "@/lib/news";
import { getSession } from "@/lib/auth";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // Vercel serverless functions cap request bodies around 4.5MB.
const MAX_DESCRIPTION_LENGTH = 2000;

export async function GET() {
  try {
    const items = await listNewsItems();
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Failed to list news items", error);
    return NextResponse.json({ error: "Failed to load news" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const file = formData.get("file");

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

  const trimmedDescription =
    typeof description === "string" ? description.trim() : "";
  if (!trimmedDescription) {
    return NextResponse.json(
      { error: "Description is required" },
      { status: 400 }
    );
  }
  if (trimmedDescription.length > MAX_DESCRIPTION_LENGTH) {
    return NextResponse.json(
      { error: `Description must be ${MAX_DESCRIPTION_LENGTH} characters or fewer` },
      { status: 400 }
    );
  }

  let filePayload: { buffer: Buffer; contentType: string } | null = null;
  if (file instanceof File && file.size > 0) {
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
    filePayload = {
      buffer: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    };
  }

  try {
    const item = await addNewsItem({
      title: trimmedTitle,
      description: trimmedDescription,
      file: filePayload,
    });
    return NextResponse.json({ success: true, item });
  } catch (error) {
    console.error("Failed to publish news item", error);
    return NextResponse.json({ error: "Publish failed" }, { status: 500 });
  }
}
