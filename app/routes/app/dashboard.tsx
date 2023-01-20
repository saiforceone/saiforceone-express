import { redirect, json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { getUser } from '~/utils/session.server';
import { Outlet, useLoaderData } from '@remix-run/react';

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/auth');
  console.log('dashboard page...');
  return json({ user });
};

export default function DashboardIndex() {
  const data = useLoaderData<LoaderData>();
  console.log('data from dashboard container: ', data);
  return (
    <div>
      <Outlet />
    </div>
  );
}
