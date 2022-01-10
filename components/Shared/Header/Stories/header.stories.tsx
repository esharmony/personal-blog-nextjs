import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';
import Header, { HeaderProps } from '../index';

export default {
  title: 'Blog/Components/Shared/Header',
  component: Header,
} as Meta;

const navigations = [
  { Item: 'About Me', Slug: 'About-Me' },
  { Item: 'Vlogs', Slug: 'Vlogs' },
  { Item: 'Tutorials', Slug: 'Tutorials' },
  { Item: 'Quick Tips', Slug: 'Quick-Tips' },
  { Item: 'Process', Slug: 'Process' },
];

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Full = Template.bind({});

Full.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};

Full.args = {
  navigationItems: navigations,
};

export const Mobile = Template.bind({});

Mobile.args = {
  navigationItems: navigations,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  }
};
