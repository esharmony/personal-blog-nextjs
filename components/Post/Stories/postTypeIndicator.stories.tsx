import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PostTypeIndicator, { Props } from '../postTypeIndicator';

export default {
  title: 'Page/Components/Post/PostTypeIndicator',
  component: PostTypeIndicator,
} as Meta;

const Template: Story<Props> = (args) => <PostTypeIndicator {...args} />;

export const Article = Template.bind({});
Article.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
Article.args = { PostType: 'Article', IsPreview: false };

export const Vlog = Template.bind({});
Vlog.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
Vlog.args = { PostType: 'Vlog', IsPreview: false };

export const VideoTutorial = Template.bind({});
VideoTutorial.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
VideoTutorial.args = { PostType: 'VideoTutorial', IsPreview: false };

export const Tutorial = Template.bind({});
Tutorial.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
Tutorial.args = { PostType: 'Tutorial', IsPreview: false };

export const QuickTip = Template.bind({});
QuickTip.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
QuickTip.args = { PostType: 'QuickTip', IsPreview: false };
