import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MainImage, { MainImageProps } from '../mainImage';

export default {
  title: 'Page/Components/Post/MainImage',
  component: MainImage
} as Meta;

const Template: Story<MainImageProps> = (args) => <MainImage {...args} />;

export const MainPostImage = Template.bind({});
MainPostImage.args = {
  Url:'images/str.jpg',
  Title:'Strapi blog post'
};
