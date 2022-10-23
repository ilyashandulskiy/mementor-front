import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import TextField from 'components/ui/TextField';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text', defaultValue: 'label' },
    text: { control: 'text', defaultValue: 'text' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Loading = Template.bind({});
Loading.args = {
  text: undefined,
};

export const Tags = Template.bind({});
Tags.args = {
  text: undefined,
  tags: ['Tag 1', 'Tag 2'],
};
