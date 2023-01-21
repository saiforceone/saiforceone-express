import { Outlet, useLoaderData, useLocation } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import { PackageStatus, Prisma } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';
import { getUser } from '~/utils/session.server';
import { getShipmentsForUser } from '~/models/shipment.server';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { ShipmentCard } from '~/components/shipment/ShipmentCard/ShipmentCard';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ListPageWrapper } from '~/pageComponents/ListPageWrapper/ListPageWrapper';
import { ShipmentFilter } from '~/components/shipment/ShipmentFilter/ShipmentFilter';
import { ShipmentStatuses } from '~/constants';
import type { CompositeShipment } from '~/types';
import { useDisplayContent } from '~/hooks/useDisplayContent';
import useWindowDimensions from '~/hooks/useWindowDimensions';

type LoaderData = {
  shipments: Awaited<ReturnType<typeof getShipmentsForUser>>;
  user: UserProfile;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/auth');

  const url = new URL(request.url);

  const filterText = url.searchParams.get('filter');
  const status = url.searchParams.get('status') as PackageStatus;

  let shipmentStatus = status ? PackageStatus[status] : null;

  let shipments = await getShipmentsForUser(
    user.id,
    filterText || '',
    shipmentStatus
  );

  return json({ user, shipments });
};

const renderContentLeft = (shipments: CompositeShipment[]) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl text-slate-600 mx-3">Shipments</h1>
        <ShipmentFilter statusOptions={ShipmentStatuses} />
      </div>
      <div className="flex flex-col gap-y-2 px-2">
        {Array.isArray(shipments) ? (
          shipments.map((shipment) => (
            <ShipmentCard
              key={shipment.id}
              active={false}
              shipment={{
                ...shipment,
                createdAt: new Date(shipment.createdAt),
                updatedAt: new Date(shipment.updatedAt),
                arrivalDate: new Date(shipment.arrivalDate),
                totalDue: new Prisma.Decimal(shipment.totalDue),
                measuredWeight: new Prisma.Decimal(
                  shipment.measuredWeight ? shipment.measuredWeight : 0
                ),
                shippingWeight: new Prisma.Decimal(
                  shipment.shippingWeight ? shipment.shippingWeight : 0
                ),
                shipmentCategory: {
                  ...shipment.shipmentCategory,
                  createdAt: new Date(shipment.shipmentCategory.createdAt),
                  updatedAt: new Date(shipment.shipmentCategory.updatedAt),
                },
              }}
            />
          ))
        ) : (
          <NoDataCard primaryText="No Shipments" />
        )}
      </div>
    </div>
  );
};

export default function ShipmentsIndex() {
  const location = useLocation();
  const { shipments } = useLoaderData() as unknown as LoaderData;
  const { width } = useWindowDimensions();
  const displayContent = useDisplayContent(
    location.pathname === '/app/shipments'
  );

  return (
    <>
      {width ? (
        <ListPageWrapper
          contentLeft={renderContentLeft(shipments)}
          contentRight={<Outlet />}
          displayContent={displayContent}
        />
      ) : null}
    </>
  );
}
