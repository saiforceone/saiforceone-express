import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AdminMenu } from '~/components/nav/AdminMenu/AdminMenu';

export default {
  title: 'nav/AdminMenu',
  component: AdminMenu,
} as ComponentMeta<typeof AdminMenu>;

const Template: ComponentStory<typeof AdminMenu> = () => <AdminMenu />;

export const Primary = Template.bind({});
