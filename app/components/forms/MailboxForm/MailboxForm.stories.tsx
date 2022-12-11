import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MailboxForm } from '~/components/forms/MailboxForm/MailboxForm';

export default {
  title: 'forms/MailboxForm',
  component: MailboxForm,
} as ComponentMeta<typeof MailboxForm>;

const Template: ComponentStory<typeof MailboxForm> = (args) => (
  <MailboxForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'New Mailbox',
  cancelAction: () => {},
  saveAction: () => {},
  user: {
    firstName: 'John',
    lastName: 'Batman',
    createdAt: new Date(),
    id: 'user-1234',
    updatedAt: new Date(),
    accountType: 'CUSTOMER',
    active: true,
    password: '',
    emailAddress: 'john.batman@sf-express.com',
  },
  visible: false,
};
