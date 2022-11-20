import { redirect, json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { User } from "@prisma/client";
import { getUser } from "~/utils/session.server";
import { Outlet } from "@remix-run/react";

// type LoaderData = {
//   user: Awaited<ReturnType<typeof getUser>>;
// }

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect("/");
  return json({ user });
};

export default function AppIndex() {

  return (
    <div>
      <Outlet />
    </div>
  )
}