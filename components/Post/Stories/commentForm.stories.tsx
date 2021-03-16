import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommentForm, { CommentsFormProps } from '../commentForm';

export default {
  title: 'Blog/Components/Post/CommentForm',
  component: CommentForm,
} as Meta;

const Template: Story<CommentsFormProps> = (args) => <CommentForm {...args} />;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const Full = Template.bind({});
Full.args = {
  PostSlug: 'slug',
};
Full.decorators = [
  (Story: Story) => {
    return (
      <QueryClientProvider client={mockedQueryClient}>
        <Story />
      </QueryClientProvider>
    );
  },
];
