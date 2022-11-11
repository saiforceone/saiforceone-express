import type { ComponentMeta, ComponentStory } from "@storybook/react";
import {BsCloudCheckFill} from "react-icons/bs";

import { BasicButton } from "~/components/shared/BasicButton/BasicButton";

export default {
  title: 'BasicButton',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => <BasicButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <BsCloudCheckFill className="self-center mr-2" />,
  title: 'Click Me with Icon!',
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  title: 'Click Me No Icon',
};