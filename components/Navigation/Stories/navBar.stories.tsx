import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';

import NavBar, { NavBarProps } from '..';

export default {
  title: 'Blog/Components/Navigation/NavBar',
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Full = Template.bind({});
Full.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};
Full.args = {
  Items: [
    { Item: 'About Me', Slug: 'About-Me' },
    { Item: 'Vlogs', Slug: 'Vlogs' },
    { Item: 'Tutorials', Slug: 'Tutorials' },
    { Item: 'Quick Tips', Slug: 'Quick-Tips' },
    { Item: 'Process', Slug: 'Process' },
  ],
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};
Mobile.args = {
  Items: [
    { Item: 'About Me', Slug: 'About-Me' },
    { Item: 'Vlogs', Slug: 'Vlogs' },
    { Item: 'Tutorials', Slug: 'Tutorials' },
    { Item: 'Quick Tips', Slug: 'Quick-Tips' },
    { Item: 'Process', Slug: 'Process' },
  ],
};
