
import { json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node"; 
import { UserAccountType } from "@prisma/client";
import { getUser } from "~/utils/session.server";
import { Outlet, useLoaderData } from "@remix-run/react";

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request, true);
  if (!user) return redirect("/auth");
  if (user.accountType === UserAccountType.CUSTOMER) return redirect("/app/dashboard");
  return json({ user });
}

export default function AdminIndex() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <p>Logged in as: {data.user?.emailAddress}</p>
      <Outlet />
    </div>
  )
}