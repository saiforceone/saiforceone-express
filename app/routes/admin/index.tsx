
import { json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node"; 
import { UserAccountType } from "@prisma/client";
import { getUser } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request, true);
  if (!user) return redirect("/auth");
  if (user.accountType === UserAccountType.CUSTOMER) return redirect("/app/dashboard");
  return json({ user });
}

export default function AdminSubIndex() {
  return (
    <div>
      <h1>Admin index</h1>
    </div>
  )
}