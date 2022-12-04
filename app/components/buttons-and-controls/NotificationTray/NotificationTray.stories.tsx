import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationTray } from '~/components/buttons-and-controls/NotificationTray/NotificationTray';

export default {
  title: 'buttons-and-controls/NotificationTray',
  component: NotificationTray,
} as ComponentMeta<typeof NotificationTray>;

const Template: ComponentStory<typeof NotificationTray> = (args) => (
  <NotificationTray {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  notificationItems: [
    {
      createdAt: new Date(),
      detail: 'These are the details of the notification',
      id: 'notification-1234',
      notificationType: 'GENERAL',
      title: 'This is a notification',
      updatedAt: new Date(),
      userId: 'user-1234',
    },
  ],
};

export const NoItems = Template.bind({});
NoItems.args = {
  notificationItems: [],
};
