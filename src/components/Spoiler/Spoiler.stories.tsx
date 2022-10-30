import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Spoiler from './Spoiler';

export default {
  title: 'Spoiler',
  component: Spoiler,
  argTypes: {
    height: {
      control: 'number',
      defaultValue: 200,
    },
    opened: {
      constrol: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Spoiler>;

const renderExample = (
  <div style={{ border: '2px solid black', width: 200, height: 200 }}>
    Example content
  </div>
);

const Template: ComponentStory<typeof Spoiler> = (args) => (
  <Spoiler {...args}>{renderExample}</Spoiler>
);

export const Default = Template.bind({});
