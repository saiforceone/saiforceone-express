import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

export default {
  title: "Buttons-and-controls/NotificationItem",
  component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = args => <NotificationItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  detail: "This is a notification or something like that",
  dismissAction: () => {},
  timeSince: "5m ago",
  title: "Notification Title"
}