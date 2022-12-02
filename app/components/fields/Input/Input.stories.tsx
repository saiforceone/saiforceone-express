import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {Input} from "~/components/fields/Input/Input";

export default {
  title: "Fields/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  fieldLabel: "Some Input",
  id: "some-input",
  placeholder: "Type something...",
};
