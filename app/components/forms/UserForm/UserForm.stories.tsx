import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserForm } from '~/components/forms/UserForm/UserForm';

export default {
  title: 'forms/UserForm',
  component: UserForm,
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = (args) => (
  <UserForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cancelAction: () => {},
  saveAction: (data) => console.log(data),
  visible: false,
};

export const WithUser = Template.bind({});
WithUser.args = {
  cancelAction: () => {},
  saveAction: (data) => console.log(data),
  userData: {
    active: true,
    emailAddress: 'john.batman@example.com',
    password: '',
    accountType: 'CUSTOMER',
    updatedAt: new Date(),
    createdAt: new Date(),
    lastName: 'Batman',
    firstName: 'John',
    id: 'user-12345-409232',
  },
  mailboxes: [
    {
      id: 'mbox-1234-090343',
      updatedAt: new Date(),
      createdAt: new Date(),
      country: 'United States',
      state: 'Florida',
      city: 'Miami',
      addressLine1: '100 NW Somewhere Street',
      addressLine2: '',
      unitCode: 'SFBOX-9801',
      userId: 'user-12345-409232',
      zipCode: '33166-1400',
    },
  ],
};
