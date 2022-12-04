import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { BsInfoSquareFill } from 'react-icons/bs';

export default {
  title: 'Shared/NoDataCard',
  component: NoDataCard,
} as ComponentMeta<typeof NoDataCard>;

const Template: ComponentStory<typeof NoDataCard> = (args) => (
  <NoDataCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  iconElement: <BsInfoSquareFill className="text-slate-600" size={24} />,
  primaryText: 'No Data Found',
  secondaryText: 'Looks like there is no data to be displayed',
};

export const withAction = Template.bind({});
withAction.args = {
  action: () => {},
  iconElement: <BsInfoSquareFill className="text-slate-600" size={24} />,
  primaryText: 'No Data Found',
  secondaryText: 'Looks like there is no data to be displayed',
};
