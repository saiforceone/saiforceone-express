import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PackageAlert } from '~/components/badges-and-labels/PackageAlert/PackageAlert';

export default {
  title: 'badges-and-labels/PackageAlert',
  component: PackageAlert,
} as ComponentMeta<typeof PackageAlert>;

const Template: ComponentStory<typeof PackageAlert> = (args) => (
  <PackageAlert {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  alertText: 'This is an alert, this is an alert',
  alertTitle: 'Alert!!!',
  dismissAction: () => {},
};
