import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CustomLink from '../customLink';
import { Post } from '../../../hooks/usePosts';

export default {
  title: 'Blog/Components/PostPreviews/CustomLink',
  component: CustomLink,
} as Meta;

const Template: Story<Post> = (args) => <CustomLink {...args} />;

export const VideoTutorialWithYouTubeLink = Template.bind({});
VideoTutorialWithYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'VideoTutorial',
  YouTubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const VideoTutorialWithoutYouTubeLink = Template.bind({});
VideoTutorialWithoutYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'VideoTutorial',
  YouTubeLink: '',
};

export const VlogWithYouTubeLink = Template.bind({});
VlogWithYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'VideoTutorial',
  YouTubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const VlogWithoutYouTubeLink = Template.bind({});
VlogWithoutYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'Vlog',
  YouTubeLink: '',
};

export const ArticleWithYouTubeLink = Template.bind({});
ArticleWithYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'Article',
  YouTubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

export const ArticleWithoutYouTubeLink = Template.bind({});
ArticleWithoutYouTubeLink.args = {
  Slug: 'First-Post',
  PostType: 'Article',
  YouTubeLink: '',
};