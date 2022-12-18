import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CompactMenu } from '~/components/nav/CompactMenu/CompactMenu';

export default {
  title: 'nav/CompactMenu',
  component: CompactMenu,
} as ComponentMeta<typeof CompactMenu>;

const Template: ComponentStory<typeof CompactMenu> = (args) => (
  <CompactMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userProfile: {
    accountType: 'CUSTOMER',
    id: 'user-1234-0923',
    initials: 'JB',
    firstName: 'John',
    lastName: 'Batman',
    lastLoginDate: new Date(),
  },
  notifications: [
    {
      title: 'New Package',
      userId: 'user-1234-dl30d',
      id: 'notify-1239-3kldw',
      createdAt: new Date(),
      updatedAt: new Date(),
      notificationType: 'PACKAGE_STATUS_UPDATE',
      detail: '1 new package delivered',
    },
  ],
};
