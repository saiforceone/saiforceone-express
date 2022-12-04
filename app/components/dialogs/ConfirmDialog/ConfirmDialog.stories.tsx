import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfirmDialog } from '~/components/dialogs/ConfirmDialog/ConfirmDialog';

export default {
  title: 'Dialogs/ConfirmDialog',
  component: ConfirmDialog,
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args) => (
  <ConfirmDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cancelAction: () => {},
  confirmAction: () => {},
  promptText: 'You are about to do the thing, would you like to continue?',
  titleText: 'Do the thing?',
};
