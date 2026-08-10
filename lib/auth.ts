import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";

const SESSION_COOKIE = "ridi_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12; // 12 hours

// A real bcrypt hash of an unused value. Comparing against this when the
// supplied email doesn't match keeps login response time constant, so a
// timing side-channel can't reveal whether the email or password was wrong.
const DUMMY_HASH =
  "$2a$12$CwTycUXWue0Thq9StjUM0uJ8Y9K8Kt6O0P1qeuveMz.MYY6ap6a3O";

export type SessionPayload = {
  email: string;
};

function getSecretKey(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "AUTH_SECRET must be set to a random string of at least 32 characters."
    );
  }
  return new TextEncoder().encode(secret);
}

async function encryptSession(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecretKey());
}

async function decryptSession(
  token: string | undefined
): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    if (typeof payload.email !== "string") return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

export async function createSession(email: string): Promise<void> {
  const token = await encryptSession({ email });
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return decryptSession(token);
}

/**
 * Verifies email/password against the single configured admin account.
 * Always runs bcrypt.compare (against a dummy hash when the email doesn't
 * match) so failure timing doesn't leak which field was wrong.
 */
export async function verifyCredentials(
  email: string,
  password: string
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHashEncoded = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHashEncoded) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD_HASH must be configured."
    );
  }

  // Stored base64-encoded: a raw bcrypt hash contains `$2b$12$...`, and env
  // file loaders (including Next's) treat `$name` as variable interpolation,
  // silently corrupting the hash. Base64 sidesteps that entirely.
  const adminPasswordHash = Buffer.from(
    adminPasswordHashEncoded,
    "base64"
  ).toString("utf8");

  const emailMatches =
    email.trim().toLowerCase() === adminEmail.trim().toLowerCase();
  const hashToCompare = emailMatches ? adminPasswordHash : DUMMY_HASH;
  const passwordMatches = await bcrypt.compare(password, hashToCompare);

  return emailMatches && passwordMatches;
}

// Best-effort in-memory rate limit. Resets on cold start and isn't shared
// across serverless instances, so it slows down casual brute-forcing but
// isn't a substitute for a real distributed limiter (e.g. Upstash) or a
// WAF rule in front of /api/auth/login for stronger guarantees.
const MAX_LOGIN_ATTEMPTS = 10;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

export function checkLoginRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(key);

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(key, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_LOGIN_ATTEMPTS) {
    return false;
  }

  entry.count += 1;
  return true;
}
