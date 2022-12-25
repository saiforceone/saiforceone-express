import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentListPage } from '~/pages/shipment/ShipmentListPage';
import { Prisma } from '@prisma/client';

export default {
  title: 'Pages/ShipmentListPage',
  component: ShipmentListPage,
} as ComponentMeta<typeof ShipmentListPage>;

const Template: ComponentStory<typeof ShipmentListPage> = (args) => (
  <ShipmentListPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  statusOptions: [
    {
      key: 'customs-detained',
      label: 'Customs Detained',
      value: 'customs-detained',
    },
    {
      key: 'customs-received',
      label: 'Customs Received',
      value: 'customs-received',
    },
  ],
  shipments: [
    {
      arrivalDate: new Date(),
      id: 'shipment-1',
      createdAt: new Date(),
      mailboxId: 'mbox-1234',
      totalDue: new Prisma.Decimal(105),
      updatedAt: new Date(),
      userId: 'user-id-1234',
      shipmentCategoryId: 'ship-cat-1234',
      source: 'Amazon.com',
      trackingNumber: 'TRK-12340901-9223',
      shippingWeight: new Prisma.Decimal(4.41),
      measuredWeight: null,
    },
    {
      arrivalDate: new Date(),
      id: 'shipment-4',
      createdAt: new Date(),
      mailboxId: 'mbox-1234',
      totalDue: new Prisma.Decimal(105),
      updatedAt: new Date(),
      userId: 'user-id-1234',
      shipmentCategoryId: 'ship-cat-1234',
      source: 'Amazon.com',
      trackingNumber: 'TRK-12340901-9223',
      shippingWeight: new Prisma.Decimal(4.41),
      measuredWeight: null,
    },
    {
      arrivalDate: new Date(),
      id: 'shipment-2',
      createdAt: new Date(),
      mailboxId: 'mbox-1234',
      totalDue: new Prisma.Decimal(105),
      updatedAt: new Date(),
      userId: 'user-id-1234',
      shipmentCategoryId: 'ship-cat-1234',
      source: 'Amazon.com',
      trackingNumber: 'TRK-12340901-9223',
      shippingWeight: new Prisma.Decimal(4.41),
      measuredWeight: null,
    },
    {
      arrivalDate: new Date(),
      id: 'shipment-3',
      createdAt: new Date(),
      mailboxId: 'mbox-1234',
      totalDue: new Prisma.Decimal(105),
      updatedAt: new Date(),
      userId: 'user-id-1234',
      shipmentCategoryId: 'ship-cat-1234',
      source: 'Amazon.com',
      trackingNumber: 'TRK-12340901-9223',
      shippingWeight: new Prisma.Decimal(4.41),
      measuredWeight: null,
    },
  ],
};
