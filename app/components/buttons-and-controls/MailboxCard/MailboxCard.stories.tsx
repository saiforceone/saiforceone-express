import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MailboxCard } from '~/components/buttons-and-controls/MailboxCard/MailboxCard';

export default {
  title: 'buttons-and-controls/MailboxCard',
  component: MailboxCard,
} as ComponentMeta<typeof MailboxCard>;

const Template: ComponentStory<typeof MailboxCard> = (args) => (
  <MailboxCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mailBoxData: {
    updatedAt: new Date(),
    createdAt: new Date(),
    id: 'mbox-1234',
    userId: 'user-1234',
    addressLine1: '123 Somewhere',
    addressLine2: '',
    unitCode: 'sfe-9003',
    zipCode: '33329',
    city: 'Hollywood',
    state: 'FL',
    country: 'USA',
    _count: {
      shipments: 2,
    },
  },
};
