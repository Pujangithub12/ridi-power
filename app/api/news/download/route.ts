import { NextRequest, NextResponse } from "next/server";
import { getNewsDocumentDownloadUrl, isKnownNewsDocumentKey } from "@/lib/news";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  const title = request.nextUrl.searchParams.get("title") ?? "document";

  if (!key || key.includes("..") || !isKnownNewsDocumentKey(key)) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  try {
    const url = await getNewsDocumentDownloadUrl(key, title);
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Failed to generate download link", error);
    return NextResponse.json(
      { error: "Failed to generate download link" },
      { status: 500 }
    );
  }
}
