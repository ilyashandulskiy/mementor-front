import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';

import Tags from 'components/ui/Tags';

export default {
  title: 'Tags',
  component: Tags,
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
    tags: { defaultValue: ['Tag_1', 'Tag_2'] },
    setTags: { defaultValue: () => null },
    placeholder: { control: 'text', defaultValue: 'Placeholder' },
    error: { control: 'boolean', defaultValue: false },
    separator: { control: 'text', defaultValue: ' ' },
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = { label: '' };

export const WithSpaces = Template.bind({});
WithSpaces.args = {
  separator: ',',
  tags: ['Tag 1', 'Tag 2'],
};
