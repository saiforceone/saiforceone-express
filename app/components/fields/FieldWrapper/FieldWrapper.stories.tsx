import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {FieldWrapper} from "~/components/fields/FieldWrapper/FieldWrapper";

export default {
  title: "Fields/FieldWrapper",
  component: FieldWrapper,
} as ComponentMeta<typeof FieldWrapper>;

const Template: ComponentStory<typeof FieldWrapper> = args => <FieldWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  field: <input className="border-1 rounded border-slate-600 w-full" id="some-field" />,
  fieldLabel: "Some Field",
  fieldId: "some-field",
}