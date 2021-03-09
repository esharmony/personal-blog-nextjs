import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { graphql, SetupWorkerApi } from 'msw';
import Header from '.';
import { worker } from '../../../mocks/browser';

export default {
  title: 'Blog/Components/Shared/Header',
  component: Header,
  decorators: [withNextRouter],
} as Meta;

const mockedQueryClientHeader = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockedQueryClientHeaderError = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockedQueryClientHeaderLoading = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const navigations = [
  { Item: 'About Me', Slug: 'About-Me' },
  { Item: 'Vlogs', Slug: 'Vlogs' },
  { Item: 'Tutorials', Slug: 'Tutorials' },
  { Item: 'Quick Tips', Slug: 'Quick-Tips' },
  { Item: 'Process', Slug: 'Process' },
];

const Template: Story = () => <Header />;

export const Full = Template.bind({});
Full.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};
Full.decorators = [
  (Story: Story) => {
    (worker as SetupWorkerApi).use(
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    );
    return (
      <QueryClientProvider client={mockedQueryClientHeader}>
        <Story />
      </QueryClientProvider>
    );
  },
];

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

Mobile.decorators = [
  (Story: Story) => {
    (worker as SetupWorkerApi).use(
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    );
    return (
      <QueryClientProvider client={mockedQueryClientHeader}>
        <Story />
      </QueryClientProvider>
    );
  },
];

export const Loading = Template.bind({});
Loading.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};

Loading.decorators = [
  (Story: Story) => {
    (worker as SetupWorkerApi).use(
      graphql.query('Navigation', (req, res, ctx) => {
        return res(ctx.delay('infinite'));
      })
    );
    return (
      <QueryClientProvider client={mockedQueryClientHeaderLoading}>
        <Story />
      </QueryClientProvider>
    );
  },
];

export const Error = Template.bind({});
Error.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};

Error.decorators = [
  (Story: Story) => {
    (worker as SetupWorkerApi).use(
      graphql.query('Navigation', (req, res, ctx) => {
        return res.networkError('Boom there was error');
      })
    );
    return (
      <QueryClientProvider client={mockedQueryClientHeaderError}>
        <Story />
      </QueryClientProvider>
    );
  },
];
