import type {ComponentMeta, ComponentStory} from "@storybook/react";
import {DashboardCard} from "~/components/admin/DashboardCard/DashboardCard";

export default {
  title: "Admin/DashboardCard",
  component: DashboardCard,
} as ComponentMeta<typeof DashboardCard>;

const Template: ComponentStory<typeof DashboardCard> = args => <DashboardCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  description: "Packages marked as unclaimed",
  primaryText: "14"
};
