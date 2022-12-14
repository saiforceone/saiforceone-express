import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainMenu } from '~/components/nav/MainMenu/MainMenu';

export default {
  title: 'nav/MainMenu',
  component: MainMenu,
} as ComponentMeta<typeof MainMenu>;

const Template: ComponentStory<typeof MainMenu> = (args) => (
  <MainMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
  userProfile: {
    accountType: 'CUSTOMER',
    initials: 'JB',
    lastLoginDate: new Date(),
    lastName: 'Batman',
    firstName: 'John',
    id: 'user-1234-dl30d',
  },
};
