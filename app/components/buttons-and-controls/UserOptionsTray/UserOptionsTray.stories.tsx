import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserOptionsTray } from '~/components/buttons-and-controls/UserOptionsTray/UserOptionsTray';

export default {
  title: 'buttons-and-controls/UserOptionsTray',
  component: UserOptionsTray,
} as ComponentMeta<typeof UserOptionsTray>;

const Template: ComponentStory<typeof UserOptionsTray> = (args) => (
  <UserOptionsTray {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userProfile: {
    accountType: 'CUSTOMER',
    initials: 'JB',
    firstName: 'John',
    lastName: 'Batman',
    id: 'user-1234-0123kl',
    lastLoginDate: new Date(),
  },
};
