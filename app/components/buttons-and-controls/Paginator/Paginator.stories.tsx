import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paginator } from "./Paginator";

export default {
  title: "Buttons-and-controls/Paginator",
  component: Paginator,
} as ComponentMeta<typeof Paginator>;

const Template: ComponentStory<typeof Paginator> = args => <Paginator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 15,
  from: 1,
  resultTo: 10,
}