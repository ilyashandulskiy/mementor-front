import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import Button from 'components/ui/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    outline: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    loading: { control: 'boolean', defaultValue: false },
    type: { control: 'select', defaultValue: 'primary' },
    children: { control: 'text', defaultValue: 'Button text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Link = Template.bind({});
Link.args = {
  outline: true,
};
