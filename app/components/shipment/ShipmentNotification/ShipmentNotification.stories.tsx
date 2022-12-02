import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {ShipmentNotification} from "~/components/shipment/ShipmentNotification/ShipmentNotification";

export default {
  title: "Shipment/ShipmentNotification",
  component: ShipmentNotification,
} as ComponentMeta<typeof ShipmentNotification>;

const Template: ComponentStory<typeof ShipmentNotification> = args => <ShipmentNotification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "ship-notification-1",
  title: "Customs Detained",
  details: "December 1, 2022",
  notificationType: "PACKAGE_STATUS_UPDATE"
}