import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsCheck2Circle } from "react-icons/bs";
import { IconButton } from "~/components/shared/IconButton/IconButton";

export default {
  title: "Shared/IconButton",
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
  icon: <BsCheck2Circle className="self-center" size={20} />
}