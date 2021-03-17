import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CommentFormButton, { CommentFormButtonProps } from '../commentFormButton';
import { isError } from 'react-query';

export default {
  title: 'Blog/Components/Post/CommentFormButton',
  component: CommentFormButton,
} as Meta;

const Template: Story<CommentFormButtonProps> = (args) => <CommentFormButton {...args} />;

export const AddCommentFormNotSelected = Template.bind({});
AddCommentFormNotSelected.args = {};

export const AddCommentFormSelected  = Template.bind({});
AddCommentFormSelected.args = {
    ShowCommentForm:true
};

export const FormErroredDuringRequest = Template.bind({});
FormErroredDuringRequest.args = {
    ShowCommentForm:true,
    IsError:true
};

export const FormSucceededAfterRequest = Template.bind({});
FormSucceededAfterRequest.args = {
    ShowCommentForm:true,
    IsSuccess:true
};