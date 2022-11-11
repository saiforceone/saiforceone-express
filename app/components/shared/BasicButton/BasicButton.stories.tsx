import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { BasicButton } from "~/components/shared/BasicButton/BasicButton";

export default {
  title: 'BasicButton',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => <BasicButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Click Me!',
};