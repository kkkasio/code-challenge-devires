import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './index';

import { AddTask } from '@styled-icons/material-outlined/AddTask';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Add Todo',
};

export const Icon: Story<ButtonProps> = (args) => <Button {...args} />;
Icon.args = {
  size: 'medium',
  children: 'Add Todo',
  icon: <AddTask />,
};
