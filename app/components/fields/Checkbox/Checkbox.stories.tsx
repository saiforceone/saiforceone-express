import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Fields/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Check this out!",
  disabled: true,
};
