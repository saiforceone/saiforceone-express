import { Prisma } from '@prisma/client';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentCard } from '~/components/shipment/ShipmentCard/ShipmentCard';

export default {
  title: 'Shipment/ShipmentCard',
  component: ShipmentCard,
} as ComponentMeta<typeof ShipmentCard>;

const Template: ComponentStory<typeof ShipmentCard> = (args) => (
  <ShipmentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  shipment: {
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
  shipmentCategory: 'PC Parts, Motherboard',
  shipmentStatuses: [
    {
      id: 'status-1234',
      createdAt: new Date(),
      updatedAt: new Date(),
      shipmentId: 'shipment-1',
      packageStatus: 'RECEIVED_WAREHOUSE',
    },
  ],
};
