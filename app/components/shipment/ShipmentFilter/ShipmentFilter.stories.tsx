import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShipmentFilter } from '~/components/shipment/ShipmentFilter/ShipmentFilter';

export default {
  title: 'Shipment/ShipmentFilter',
  component: ShipmentFilter,
} as ComponentMeta<typeof ShipmentFilter>;

const Template: ComponentStory<typeof ShipmentFilter> = (args) => (
  <ShipmentFilter {...args} />
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
};
