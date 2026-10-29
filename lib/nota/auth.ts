import "server-only";
import {
  createHash,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
import { cookies } from "next/headers";
import { db } from "./db";

export const COOKIE_NAME = "sib_admin";
export const SESSION_SECONDS = 12 * 60 * 60;
export const digest = (value: string) =>
  createHash("sha256").update(value).digest("hex");
export function hashPasscode(value: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(value, salt, 64).toString("hex")}`;
}
export function verifyPasscode(value: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(value, salt, 64);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
export async function authenticated() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token || token.length > 100) return false;
  const session = await db().adminSession.findUnique({
    where: { tokenHash: digest(token) },
  });
  return Boolean(session && session.expiresAt > new Date());
}
export async function login(passcode: string, request: Request) {
  const database = db();
  const window = Math.floor(Date.now() / 900_000);
  const ip = process.env.VERCEL
    ? (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim()
    : "local";
  const results = await database.$transaction([
    database.loginThrottle.upsert({
      where: { key: `all:${window}` },
      create: {
        key: `all:${window}`,
        expiresAt: new Date((window + 1) * 900_000),
      },
      update: { attempts: { increment: 1 } },
    }),
    database.loginThrottle.upsert({
      where: { key: `${digest(ip)}:${window}` },
      create: {
        key: `${digest(ip)}:${window}`,
        expiresAt: new Date((window + 1) * 900_000),
      },
      update: { attempts: { increment: 1 } },
    }),
  ]);
  if (results[0].attempts > 60 || results[1].attempts > 8)
    return {
      error: "Terlalu banyak percobaan. Coba lagi dalam 15 menit.",
      status: 429,
    };
  let credential = await database.adminCredential.findUnique({
    where: { id: "admin" },
  });
  if (!credential)
    credential = await database.adminCredential.upsert({
      where: { id: "admin" },
      create: {
        id: "admin",
        passcodeHash: hashPasscode(
          process.env.ADMIN_INITIAL_PASSCODE || "121413",
        ),
      },
      update: {},
    });
  if (!verifyPasscode(passcode, credential.passcodeHash))
    return { error: "Passcode tidak sesuai.", status: 401 };
  const token = randomBytes(32).toString("base64url");
  await database.adminSession.create({
    data: {
      tokenHash: digest(token),
      expiresAt: new Date(Date.now() + SESSION_SECONDS * 1000),
    },
  });
  await database.adminSession.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
  await database.loginThrottle.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
  return { token };
}
