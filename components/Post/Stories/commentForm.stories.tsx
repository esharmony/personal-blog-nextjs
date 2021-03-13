import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CommentForm from '../commentForm';

export default {
  title: 'Blog/Components/Post/CommentForm',
  component: CommentForm
} as Meta;

const Template: Story = () => <CommentForm />;

export const Full = Template.bind({});
