import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import TextArea from 'components/ui/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    label: { control: 'text', defaultValue: 'TextArea label' },
    placeholder: { control: 'text', defaultValue: 'Placeholder' },
    error: { control: 'boolean', defaultValue: false },
    password: { control: 'boolean', defaultValue: false },
    errorText: { control: 'text', defaultValue: 'Field is invalid' },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const WithLabel = Template.bind({});
WithLabel.args = {};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { label: '' };
