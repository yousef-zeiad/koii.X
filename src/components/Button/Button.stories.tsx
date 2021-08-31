import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  type: 'primary',
}
export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  type: 'danger',
}
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  type: 'default',
}
