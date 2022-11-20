import bcrypt from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { db } from "./db.server";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET has not been set.");
}

const SALT = process.env.SALT;
if (!SALT) {
  throw new Error("SALT has not been set.");
}

type LoginForm = {
  emailAddress: string;
  password: string;
}

type RegisterForm = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

export async function login({
  emailAddress,
  password,
}: LoginForm) {
  const user = await db.user.findUnique({
    where: { emailAddress }
  });

  if (!user) return null;

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) return null;

  return { id: user.id, emailAddress }
}

export async function register({
  firstName,
  lastName,
  emailAddress,
  password,
}: RegisterForm) {
  const pwHash = await bcrypt.hash(password, 10)
  const user = await db.user.create({data: {
    firstName,
    lastName,
    emailAddress,
    password: pwHash,
    active: true,
  }});

  return {id: user.id, emailAddress};
}

export async function getUser(request: Request, getAccountType: boolean = false) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, emailAddress: true,  accountType: getAccountType},
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}


const storage = createCookieSessionStorage({
  cookie: {
    name: "sfe_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(
  userId: string,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}