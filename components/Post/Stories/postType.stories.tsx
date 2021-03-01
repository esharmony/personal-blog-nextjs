import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PostTypeIndicator, { Props } from '../postTypeIndicator';

export default {
  title: 'Page/Components/Post/PostTypeIndicator',
  component: PostTypeIndicator 
} as Meta;

const Template: Story<Props> = (args) => <PostTypeIndicator {...args} />;

export const Article = Template.bind({});
Article.args = { PostType: "Article"}; 

export const Vlog = Template.bind({});
Vlog.args = { PostType: "Vlog" }; 

export const VideoTutorial = Template.bind({});
VideoTutorial.args = { PostType: "VideoTutorial"}; 

export const Tutorial = Template.bind({});
Tutorial.args = { PostType: "Tutorial" }; 