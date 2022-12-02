import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {StackedLabel} from "~/components/badges-and-labels/StackedLabel/StackedLabel";

export default {
  title: "badges-and-labels/StackedLabel",
  component: StackedLabel,
} as ComponentMeta<typeof StackedLabel>;

const Template: ComponentStory<typeof StackedLabel> = args => <StackedLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Category",
  valueText: "PC Parts, Motherboard"
}