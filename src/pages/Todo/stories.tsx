import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Todo from '.';

export default {
  title: 'Todo Page',
  component: Todo,
} as Meta;

export const Default2: Story = (args) => <Todo {...args} />;
