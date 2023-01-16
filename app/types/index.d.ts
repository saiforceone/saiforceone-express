import type { Mailbox, Shipment, ShipmentCategory } from '@prisma/client';

export type CompositeMailboxListItem = Mailbox & {
  _count: { shipments: number };
};

export type CompositeMailbox = CompositeMailboxListItem & {
  shipments: Shipment[];
};

export type CompositeShipment = Shipment & {
  shipmentCategory: ShipmentCategory;
};
