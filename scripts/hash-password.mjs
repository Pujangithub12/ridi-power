// Run locally to generate the values for ADMIN_PASSWORD_HASH and AUTH_SECRET.
// Usage: node scripts/hash-password.mjs "your-strong-password"
//
// This never sends the password anywhere — it just hashes it on your machine.
// Paste the printed values into .env.local and your Vercel project's
// Environment Variables. Never commit the plaintext password anywhere.

import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "your-strong-password"');
  process.exit(1);
}

if (password.length < 12) {
  console.warn(
    "Warning: that password is under 12 characters. A longer, random password is strongly recommended for an admin account."
  );
}

const hash = await bcrypt.hash(password, 12);
// base64-encoded: a raw bcrypt hash contains `$2b$12$...`, and env file
// loaders (including Next's) treat `$name` as variable interpolation,
// silently corrupting the hash. Base64 sidesteps that entirely.
const encodedHash = Buffer.from(hash, "utf8").toString("base64");
const authSecret = randomBytes(32).toString("base64");

console.log("\nADMIN_PASSWORD_HASH=" + encodedHash);
console.log("AUTH_SECRET=" + authSecret);
console.log(
  "\nSet these (plus ADMIN_EMAIL) in .env.local and in Vercel's Environment Variables.\n"
);
