import { db } from '~/utils/db.server';

export const getShipmentStatuses = async (shipmentId: string) => {
  return await db.shipmentStatus.findMany({
    where: {
      shipmentId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};
