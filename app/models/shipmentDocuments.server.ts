import type { ShipmentDocument } from '@prisma/client';
import { db } from '~/utils/db.server';

export const getShipmentDocuments = async (
  shipmentId: string
): Promise<ShipmentDocument[]> => {
  return await db.shipmentDocument.findMany({
    where: {
      shipmentId,
    },
  });
};
