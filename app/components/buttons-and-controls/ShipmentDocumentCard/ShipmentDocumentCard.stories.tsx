import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentDocumentCard } from '~/components/buttons-and-controls/ShipmentDocumentCard/ShipmentDocumentCard';

export default {
  title: 'buttons-and-controls/ShipmentDocumentCard',
  component: ShipmentDocumentCard,
} as ComponentMeta<typeof ShipmentDocumentCard>;

const Template: ComponentStory<typeof ShipmentDocumentCard> = (args) => (
  <ShipmentDocumentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  deleteAction: () => {},
  shipmentDocument: {
    createdAt: new Date(),
    updatedAt: new Date(),
    shipmentId: 'shp-id-1234',
    url: 'http://localhost:8080/files/blah.pdf',
    id: 'file-1234',
    name: 'invoice-1234',
    documentType: 'INVOICE',
  },
};
