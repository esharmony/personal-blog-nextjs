import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Post from '..';
import { Post as IPost } from '../../../hooks/usePosts';

export default {
  title: 'Page/Components/Post/Post',
  component: Post
} as Meta;

const Template: Story<IPost> = (args) => <Post {...args} />;

export const Test = Template.bind({});
Test.args = {
  Title:'Test',
  id:"1"
};
