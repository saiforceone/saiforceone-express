import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DashboardPageWrapper } from '~/pageComponents/DashboardPageWrapper/DashboardPageWrapper';

export default {
  title: 'PageComponents/DashboardPageWrapper',
  component: DashboardPageWrapper,
} as ComponentMeta<typeof DashboardPageWrapper>;

const Template: ComponentStory<typeof DashboardPageWrapper> = (args) => (
  <DashboardPageWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: (
    <div className="flex flex-1 bg-slate-50 min-h-screen p-2">
      <h3>Dashboard Content goes here</h3>
    </div>
  ),
  title: 'Dashboard',
};
