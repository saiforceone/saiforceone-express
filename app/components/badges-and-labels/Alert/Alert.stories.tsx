import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {Alert} from "~/components/badges-and-labels/Alert/Alert";

export default {
  title: "badges-and-labels/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  alertText: "This is an alert, this is an alert",
  alertTitle: "Alert!!!",
  dismissAction: () => {},
  packageStatus: "RECEIVED_WAREHOUSE",
}