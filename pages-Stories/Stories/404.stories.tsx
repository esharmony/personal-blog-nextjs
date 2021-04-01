import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';
import { graphql, SetupWorkerApi } from 'msw';
import FourOFour, { Custom404Props } from '../../pages/404';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from '../../mocks/browser';

export default {
  title: 'Blog/Pages/404',
  component: FourOFour,
  decorators: [withNextRouter],
} as Meta;

const navigations = [
  { Item: 'About Me', Slug: 'About-Me' },
  { Item: 'Vlogs', Slug: 'Vlogs' },
  { Item: 'Tutorials', Slug: 'Tutorials' },
];

const mockedQueryClientLoaded = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Template: Story<Custom404Props> = (args) => <FourOFour {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  NavigationItems:[{ Slug:"/about-me", Item: "About me"}]
}

Primary.parameters = {
  nextRouter: {
    pathname: '/404',
    asPath: '/404',
  },
};

Primary.decorators = [
  (Story: Story) => {
    !!worker && worker.use(
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    );
    return (
      <QueryClientProvider client={mockedQueryClientLoaded}>
        <Story />
      </QueryClientProvider>
    );
  },
];
