import { Outlet, useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { getUser } from '~/utils/session.server';
import { getShipmentsForUser } from '~/models/shipment.server';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { ShipmentCard } from '~/components/shipment/ShipmentCard/ShipmentCard';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ListPageWrapper } from '~/pageComponents/ListPageWrapper/ListPageWrapper';
import { Prisma } from '@prisma/client';

type LoaderData = {
  shipments: Awaited<ReturnType<typeof getShipmentsForUser>>;
  user: UserProfile;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/auth');
  let shipments = await getShipmentsForUser(user.id);

  return json({ user, shipments });
};

export default function ShipmentsIndex() {
  const { shipments } = useLoaderData<LoaderData>();

  const ShipmentList = Array.isArray(shipments) ? (
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
        shipmentCategory="Example"
        shipmentStatuses={[]}
      />
    ))
  ) : (
    <NoDataCard primaryText="No Shipments" />
  );

  return (
    <ListPageWrapper
      contentLeft={ShipmentList}
      contentRight={<Outlet />}
      pageTitle="Shipments"
      showContentRightOnly={false}
    />
  );
}
