import { NextRequest, NextResponse } from "next/server";
import { checkLoginRateLimit, createSession, verifyCredentials } from "@/lib/auth";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { email, password } = (body ?? {}) as {
    email?: unknown;
    password?: unknown;
  };

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (!checkLoginRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many login attempts. Try again later." },
      { status: 429 }
    );
  }

  let isValid: boolean;
  try {
    isValid = await verifyCredentials(email, password);
  } catch (error) {
    console.error("Login is not configured", error);
    return NextResponse.json(
      { error: "Login is not configured" },
      { status: 500 }
    );
  }

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }

  await createSession(email.trim().toLowerCase());
  return NextResponse.json({ success: true });
}
