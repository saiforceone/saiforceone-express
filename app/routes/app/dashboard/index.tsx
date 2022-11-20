import type { User } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getUser } from "~/utils/session.server";

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({ user });
}

// TODO: HOC for auth
export default function DashboardIndex() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Dashboard Index Placeholder</h1>
      {data.user ? (
        <div>
          Logged in as: {data.user.emailAddress}
        </div>
      ) : (
        <div>
          Not logged in
        </div>
      )}
    </div>
  );
}