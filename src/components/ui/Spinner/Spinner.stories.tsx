import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import { Spinner } from 'components/ui';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'select', defaultValue: 'accent' },
    size: { control: 'number', defaultValue: 20 },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
