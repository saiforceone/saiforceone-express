import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthForm } from '~/components/forms/AuthForm/AuthForm';

export default {
  title: 'forms/AuthForm',
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => (
  <AuthForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fieldErrors: {
    firstName: 'Invalid first name',
  },
};
