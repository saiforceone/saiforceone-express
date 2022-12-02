import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {SectionHeader} from "~/components/shared/SectionHeader/SectionHeader";
import {BsCheckSquareFill} from "react-icons/all";

export default {
  title: "Shared/SectionHeader",
  component: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = args => <SectionHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: "Section Heading One",
  iconElement: <BsCheckSquareFill className="text-slate-600 mr-2" size={20} />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  heading: "Section Heading One",
};