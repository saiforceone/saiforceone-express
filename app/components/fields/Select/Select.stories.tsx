import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {Select} from "~/components/fields/Select/Select";

export default {
  title: "Fields/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  fieldLabel: "Some Select",
  id: "some-select",
  placeholder: "Some Select",
  selectOptions: [
    {
      key: "123",
      label: "Some Label",
      value: "Some Value"
    }
  ],
  value: undefined,
};
