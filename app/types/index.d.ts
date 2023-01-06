import type { Shipment, ShipmentCategory } from '@prisma/client';

export type CompositeShipment = Shipment & {
  shipmentCategory: ShipmentCategory;
};
