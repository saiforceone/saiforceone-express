import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsTagFill } from "react-icons/bs";
import { Label } from "~/components/badges-and-labels/Label/Label";

export default {
  title: "badges-and-labels/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconElement: <BsTagFill />,
  labelText: "Some label",
}