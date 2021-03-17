import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Form, { FormProps } from '../form';

export default {
  title: 'Blog/Components/Post/Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const FormSelected = Template.bind({});
FormSelected.args = {
  ShowCommentForm:true
};

export const FormErroredOnRequest = Template.bind({});
FormErroredOnRequest.args = {
  ShowCommentForm:true,
  IsError:true
};

export const FormSuccessAfterRequest = Template.bind({});
FormSuccessAfterRequest.args = {
  ShowCommentForm:true,
  IsSuccess: true
};
