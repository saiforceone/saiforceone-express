import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsPlusSquareFill } from "react-icons/bs";
import { MenuItem } from "./MenuItem";

export default {
  title: "Buttons-and-controls/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconElement: <BsPlusSquareFill />,
  itemText: "Menu Item One",
  onClick: () => console.log("Menu Item One clicked"),
}