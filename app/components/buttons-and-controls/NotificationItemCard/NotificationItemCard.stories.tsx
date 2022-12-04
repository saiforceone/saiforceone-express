import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItemCard } from './NotificationItemCard';

export default {
  title: 'Buttons-and-controls/NotificationItem',
  component: NotificationItemCard,
} as ComponentMeta<typeof NotificationItemCard>;

const Template: ComponentStory<typeof NotificationItemCard> = (args) => (
  <NotificationItemCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  detail: 'This is a notification or something like that',
  dismissAction: () => {},
  timeSince: '5m ago',
  title: 'Notification Title',
};
