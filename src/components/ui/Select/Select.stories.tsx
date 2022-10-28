import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import { Select } from 'components/ui';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    children: {
      control: 'jsx',
      defaultValue: (
        <>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </>
      ),
    },
    label: {
      control: 'text',
      defaultValue: 'Select label',
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
