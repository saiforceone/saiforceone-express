import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentDocumentModal } from '~/components/buttons-and-controls/ShipmentDocumentModal/ShipmentDocumentModal';

export default {
  title: 'buttons-and-controls/ShipmentDocumentModal',
  component: ShipmentDocumentModal,
} as ComponentMeta<typeof ShipmentDocumentModal>;

const Template: ComponentStory<typeof ShipmentDocumentModal> = (args) => (
  <ShipmentDocumentModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cancelAction: () => {},
  shipmentDocuments: [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      shipmentId: 'shp-id-1234',
      url: 'http://localhost:8080/files/blah.pdf',
      id: 'file-1234',
      name: 'invoice-1234',
      documentType: 'INVOICE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      shipmentId: 'shp-id-1236',
      url: 'http://localhost:8080/files/blah.pdf',
      id: 'file-1235',
      name: 'invoice-1235',
      documentType: 'PERMIT',
    },
  ],
  visible: false,
};
