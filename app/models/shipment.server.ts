import { db } from '~/utils/db.server';
import type { CompositeShipment } from '~/types';

export const getShipmentsForUser = async (
  userId: string
): Promise<CompositeShipment[]> => {
  return await db.shipment.findMany({
    where: {
      userId,
    },
    include: {
      shipmentCategory: true,
    },
  });
};

export const getShipmentById = async (
  shipmentId: string
): Promise<CompositeShipment | null> => {
  return await db.shipment.findFirst({
    where: {
      id: shipmentId,
    },
    include: {
      shipmentCategory: true,
    },
  });
};
