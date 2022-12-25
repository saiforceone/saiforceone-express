import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectV2 } from '~/components/fields/SelectV2/SelectV2';

export default {
  title: 'fields/SelectV2',
  component: SelectV2,
} as ComponentMeta<typeof SelectV2>;

const Template: ComponentStory<typeof SelectV2> = (args) => (
  <SelectV2 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fieldLabel: 'Fancy Select',
  selectOptions: [
    {
      key: 'opt-1',
      label: 'Option One',
      value: 'option-one',
    },
    {
      key: 'opt-2',
      label: 'Option Two',
      value: 'option-two',
    },
    {
      key: 'opt-3',
      label: 'Option Three',
      value: 'option-three',
    },
  ],
  selectedOption: {
    key: 'opt-1',
    label: 'Option One',
    value: 'option-one',
  },
};
