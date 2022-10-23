import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import Input from 'components/ui/Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: { control: 'text', defaultValue: 'Input label' },
    placeholder: { control: 'text', defaultValue: 'Placeholder' },
    error: { control: 'boolean', defaultValue: false },
    password: { control: 'boolean', defaultValue: false },
    errorText: { control: 'text', defaultValue: 'Field is invalid' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { label: '' };

export const Password = Template.bind({});
Password.args = {
  password: true,
  label: 'Enter password',
  placeholder: 'password',
};
