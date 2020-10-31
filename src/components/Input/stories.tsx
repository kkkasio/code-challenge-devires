import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './index';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = {
  placeholder: 'Type here...',
};
