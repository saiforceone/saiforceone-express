import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MailboxCard } from '~/components/buttons-and-controls/MailboxCard/MailboxCard';

export default {
  title: 'buttons-and-controls/MailboxCard',
  component: MailboxCard,
} as ComponentMeta<typeof MailboxCard>;

const Template: ComponentStory<typeof MailboxCard> = (args) => (
  <MailboxCard {...args} />
);

export const Primary = Template.bind({});
