import { db } from '~/utils/db.server';
import type { PackageStatus } from '@prisma/client';
import type { CompositeShipment } from '~/types';

export const getShipmentsForUser = async (
  userId: string,
  filter?: string,
  status?: PackageStatus | null
): Promise<CompositeShipment[]> => {
  return status
    ? await db.shipment.findMany({
        where: {
          userId,
          source: {
            contains: filter,
          },
          lastStatus: {
            equals: status,
          },
        },
        include: {
          shipmentCategory: true,
        },
      })
    : await db.shipment.findMany({
        where: {
          userId,
          source: {
            contains: filter,
          },
        },
        include: {
          shipmentCategory: true,
        },
      });
};

// export const getShipmentsSummaryForUser = async (userId: string) => {
//   const groupedShipments = await db.shipment.groupBy({
//     by: ['lastStatus'],
//     where: {
//       userId,
//     },
//   });
// };

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

const obj = {
  RECEIVED_WAREHOUSE: 5,
};
