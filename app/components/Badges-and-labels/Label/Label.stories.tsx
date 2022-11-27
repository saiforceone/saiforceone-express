import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsTagFill } from "react-icons/bs";
import { Label } from "~/components/Badges-and-labels/Label/Label";

export default {
  title: "Controls/Labels & Badges/Labels",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconElement: <BsTagFill />,
  labelText: "Some label",
}