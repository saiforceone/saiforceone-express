import type { LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getUser } from '~/utils/session.server';
import { getShipmentsSummaryForUser } from '~/models/shipment.server';
import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';
import { DashboardCard } from '~/components/admin/DashboardCard/DashboardCard';
import { SectionHeader } from '~/components/shared/SectionHeader/SectionHeader';
import { BsArrowRightSquare, BsBox } from 'react-icons/bs';

type LoaderData = {
  summary: Awaited<ReturnType<typeof getShipmentsSummaryForUser>>;
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/auth');
  const summary = await getShipmentsSummaryForUser(user.id);
  return json({ summary, user });
};

export default function DashboardIndex() {
  const { summary, user } = useLoaderData<LoaderData>();
  console.log('data dashboard: ', summary);
  return (
    <ContentPageWrapper
      content={
        <div>
          <div className="flex flex-col gap-y-4 p-2">
            <SectionHeader heading="Shipment Overview / Summary" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.keys(summary).map((k) => (
                <DashboardCard
                  key={`summary-key-${k}`}
                  description={k}
                  primaryText={`${summary[k]}`}
                />
              ))}
            </div>
            <Link
              className="flex items-center p-2 bg-slate-400 hover:bg-slate-300 duration-200 rounded w-fit"
              to="/app/shipments"
            >
              My Shipments
              <BsArrowRightSquare className="ml-2" />
            </Link>
          </div>
        </div>
      }
    />
  );
}
