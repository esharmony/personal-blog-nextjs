import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Comments, { CommentProps } from '../comments';

export default {
  title: 'Blog/Components/Post/Comments',
  component: Comments
} as Meta;

const Template: Story<CommentProps> = (args) => <Comments {...args} />;

export const WithComments = Template.bind({});
WithComments.args = {
    Comments:[
        {
            Name:"Fred", 
            Comment:"An equisite post, fascinating read!",
            id:"1"
        },
        {
            Name:"Jim", 
            Comment:"What an amazing post, thanks you for publishing it!",
            id:"2"
        }
    ]
};

export const WithNoComments = Template.bind({});
WithNoComments.args = {
    Comments:[]
};
