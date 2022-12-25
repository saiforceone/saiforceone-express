import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListPageWrapper } from '~/pageComponents/ListPageWrapper/ListPageWrapper';

export default {
  title: 'PageComponents/ListPageWrapper',
  component: ListPageWrapper,
} as ComponentMeta<typeof ListPageWrapper>;

const Template: ComponentStory<typeof ListPageWrapper> = (args) => (
  <ListPageWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  contentLeft: <p>Content left area</p>,
  contentLeftHeader: (
    <div className="bg-slate-200 p-2 rounded items-center">
      <p>This is the content left header</p>
    </div>
  ),
  contentRight: <p>Content Area here</p>,
  pageTitle: 'Example Page',
  titleExtra: <p>Showing 1 to 5 of 15</p>,
};
