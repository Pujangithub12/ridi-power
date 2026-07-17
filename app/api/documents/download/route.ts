import { NextRequest, NextResponse } from "next/server";
import { DocumentCategory, getDownloadUrl, keyBelongsToCategory } from "@/lib/r2";

const CATEGORIES: DocumentCategory[] = ["annual", "quarterly"];

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!key || key.includes("..")) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  const isValidKey = CATEGORIES.some((category) =>
    keyBelongsToCategory(key, category)
  );
  if (!isValidKey) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  try {
    const url = await getDownloadUrl(key);
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Failed to generate download link", error);
    return NextResponse.json(
      { error: "Failed to generate download link" },
      { status: 500 }
    );
  }
}
