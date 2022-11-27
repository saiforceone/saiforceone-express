import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserProfileCard } from "./UserProfileCard";

export default {
  title: "Buttons-and-controls/UserProfileCard",
  component: UserProfileCard,
} as ComponentMeta<typeof UserProfileCard>;

const Template: ComponentStory<typeof UserProfileCard> = args => <UserProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accountType: "Customer",
  initials: "JB",
  username: "john.batman",
};
