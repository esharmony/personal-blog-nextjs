import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';

import NavBarItem from '../navBarItem';
import { NavigationItem } from '../../../hooks/useNavigation'; 

export default {
  title: 'Blog/Components/Navigation/NavBarItem',
  component: NavBarItem,
} as Meta;

const Template: Story<NavigationItem> = (args) => <NavBarItem {...args} />;

export const SelectedIndex = Template.bind({});
SelectedIndex.parameters = {
  nextRouter: {
    pathname: '/',
    asPath:'/'
  },
};
SelectedIndex.args = { Item: 'Latest', Slug:'/'};

export const NotSelectedIndex = Template.bind({});
NotSelectedIndex.parameters = {
  nextRouter: {
    pathname: 'posts/about-me',
    asPath: 'posts/about-me'
  },
};
NotSelectedIndex.args = { Item: 'Latest', Slug:'/'};

export const SelectedOtherThanIndex = Template.bind({});
SelectedOtherThanIndex.parameters = {
  nextRouter: {
    pathname: '/posts/About-Me',
    asPath:'/posts/About-Me'
  },
};
SelectedOtherThanIndex.args = { Item: 'About Me', Slug:'About-Me'};

export const NotSelectedOtherThanIndex = Template.bind({});
NotSelectedOtherThanIndex.parameters = {
  nextRouter: {
    pathname: '/posts/Another',
    asPath: '/posts/Another'
  },
};
NotSelectedOtherThanIndex .args = { Item: 'About Me', Slug:'About-Me'};


