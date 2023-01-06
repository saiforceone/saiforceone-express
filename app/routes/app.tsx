import { redirect, json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { getUser } from '~/utils/session.server';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MainMenu } from '~/components/nav/MainMenu/MainMenu';

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/');
  return json({ user });
};

export default function AppIndex() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="h-screen max-h-screen">
      {data.user && <MainMenu userProfile={data.user} notifications={[]} />}
      <Outlet />
    </div>
  );
}
