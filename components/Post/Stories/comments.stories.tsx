import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { QueryClient, QueryClientProvider } from 'react-query';
import Comments, { CommentProps } from '../comments';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'Blog/Components/Post/Comments',
  component: Comments,
  decorators:[(Story: Story) => {
    return (
      <QueryClientProvider client={mockedQueryClient}>
        <Story />
      </QueryClientProvider>
    );
  },]
} as Meta;

const Template: Story<CommentProps> = (args) => <Comments {...args} />;

export const WithComments = Template.bind({});
WithComments.args = {
  Comments: [
    {
      Name: 'Fred',
      Comment: 'An equisite post, fascinating read!',
      id: '1',
    },
    {
      Name: 'Jim',
      Comment: 'What an amazing post, thanks you for publishing it!',
      id: '2',
    },
  ],
};

export const WithNoComments = Template.bind({});
WithNoComments.args = {
  Comments: [],
  PostSlug: 'slug',
};
