import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
    title: 'Input',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;
const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    placeholder: 'So BIIIG'
}
export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    placeholder: 'Reg'
}
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'Small'
}
