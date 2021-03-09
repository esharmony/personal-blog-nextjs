import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';
import { graphql, SetupWorkerApi } from 'msw';


import Index from '..';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from '../../mocks/browser';

export default {
  title: 'Blog/Pages/Index',
  component: Index,
  decorators: [withNextRouter],
} as Meta;

const posts = [
  {
    Tags: ['cool post', 'ideas'],
    IsPostPreview: false,
    Title: 'Blog post 1',
    id: '1',
    SubTitle: 'The first post',
    Slug: 'First-Post',
    MetaTitle: 'Strapi tutorial',
    MetaDescription: 'First post about my blog',
    CoverImage: {
      url:
        'https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg',
    },
    ShortBody: 'Here is my first post about my blog, its a good post',
    Body:
      'Here is my first post about my blog \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ultrices urna, vestibulum laoreet diam. Quisque laoreet pretium nisl, non ultricies lacus laoreet id. Duis interdum purus nisl, sed dictum elit bibendum quis. In aliquam ex vitae urna sodales, quis sagittis dui viverra. Vestibulum mattis ligula odio, ut eleifend tortor sagittis sit amet. Vivamus vestibulum sem et suscipit interdum. Vestibulum non facilisis velit. Mauris eget vehicula diam. Etiam a laoreet ex, laoreet condimentum leo. Aliquam a tristique sem. Nam quis quam ut nulla porta dignissim ac sed lorem. Suspendisse dictum nisi quam, ut elementum orci consectetur a.\n\n![cover.jpg](https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg)\n\nAliquam non arcu a nulla aliquam fermentum. Quisque tortor lorem, pellentesque fringilla dolor suscipit, ultricies feugiat erat. Morbi eget eros et turpis blandit tempor. Nunc sit amet pulvinar tellus. Aenean lacinia vulputate arcu a venenatis. Proin vitae faucibus ante. Donec lobortis consectetur hendrerit. Donec ornare a diam non tempus. Sed eros elit, volutpat eget varius ac, imperdiet id tortor. Etiam ut molestie justo. Donec pulvinar interdum purus sit amet elementum. Vestibulum consectetur et dui ac ullamcorper.\n\n```\nPellentesque bibendum enim id enim feugiat, ut lobortis elit lobortis. Sed ornare feugiat posuere. \nCras vehicula efficitur dignissim. Vestibulum malesuada gravida neque, sit amet ultricies eros mollis sed. \nPellentesque sit amet nisl in neque pretium vestibulum lacinia sit amet augue.\n\n```\n\nDonec maximus elit eu convallis varius. In maximus in orci eu dapibus. Curabitur sed rutrum mauris. Nam sagittis ipsum at libero tincidunt, non sagittis nisl placerat. Aenean efficitur vitae augue vel sollicitudin. Etiam eget mauris rhoncus, blandit leo eu, porta augue. Curabitur porta at ipsum at scelerisque. Vivamus porta tellus est, id elementum tortor semper id.',
    PostType: 'VideoTutorial',
    Comments: [
      {
        Comment: 'Here is my comment for number 2',
        Name: 'matt',
      },
      {
        Comment: 'Here is another comment for 1',
        Name: 'matt',
      },
    ],
    YouTubeLink: '',
  },
  {
    Tags: ['cool post', 'ideas'],
    IsPostPreview: false,
    Title: 'Blog post 2',
    id: '2',
    SubTitle: 'The second post',
    Slug: 'Second-Post',
    MetaTitle: 'First post',
    MetaDescription: 'First post about my blog',
    CoverImage: {
      url:
        'https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg',
    },
    ShortBody: 'Here is my second post about my blog, its a great post',
    Body:
      'Here is my first post about my blog \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ultrices urna, vestibulum laoreet diam. Quisque laoreet pretium nisl, non ultricies lacus laoreet id. Duis interdum purus nisl, sed dictum elit bibendum quis. In aliquam ex vitae urna sodales, quis sagittis dui viverra. Vestibulum mattis ligula odio, ut eleifend tortor sagittis sit amet. Vivamus vestibulum sem et suscipit interdum. Vestibulum non facilisis velit. Mauris eget vehicula diam. Etiam a laoreet ex, laoreet condimentum leo. Aliquam a tristique sem. Nam quis quam ut nulla porta dignissim ac sed lorem. Suspendisse dictum nisi quam, ut elementum orci consectetur a.\n\n![cover.jpg](https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg)\n\nAliquam non arcu a nulla aliquam fermentum. Quisque tortor lorem, pellentesque fringilla dolor suscipit, ultricies feugiat erat. Morbi eget eros et turpis blandit tempor. Nunc sit amet pulvinar tellus. Aenean lacinia vulputate arcu a venenatis. Proin vitae faucibus ante. Donec lobortis consectetur hendrerit. Donec ornare a diam non tempus. Sed eros elit, volutpat eget varius ac, imperdiet id tortor. Etiam ut molestie justo. Donec pulvinar interdum purus sit amet elementum. Vestibulum consectetur et dui ac ullamcorper.\n\n```\nPellentesque bibendum enim id enim feugiat, ut lobortis elit lobortis. Sed ornare feugiat posuere. \nCras vehicula efficitur dignissim. Vestibulum malesuada gravida neque, sit amet ultricies eros mollis sed. \nPellentesque sit amet nisl in neque pretium vestibulum lacinia sit amet augue.\n\n```\n\nDonec maximus elit eu convallis varius. In maximus in orci eu dapibus. Curabitur sed rutrum mauris. Nam sagittis ipsum at libero tincidunt, non sagittis nisl placerat. Aenean efficitur vitae augue vel sollicitudin. Etiam eget mauris rhoncus, blandit leo eu, porta augue. Curabitur porta at ipsum at scelerisque. Vivamus porta tellus est, id elementum tortor semper id.',
    PostType: 'Article',
    Comments: [
      {
        Comment: 'Here is my comment for number 2',
        Name: 'matt',
      },
      {
        Comment: 'Here is another comment for 1',
        Name: 'matt',
      },
    ],
    YouTubeLink: '',
  },
];

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

const mockedQueryClientLoading = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockedQueryClientError = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Template: Story = () => (
    <Index />
);

export const Loaded = Template.bind({});

Loaded.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};

Loaded.decorators = [
  (Story: Story) => {
    
    (worker as SetupWorkerApi).use(
      graphql.query('Posts', (req, res, ctx) => {
        return res(
          ctx.data({
            posts,
          })
        );
      }),
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    );
    return <QueryClientProvider client={mockedQueryClientLoaded}><Story /></QueryClientProvider>;
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
      graphql.query('Posts', (req, res, ctx) => {
        // When authenticated, respond with a query payload
        return res(ctx.delay('infinite'));
      }),
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    )
    return <QueryClientProvider client={mockedQueryClientLoading}><Story /></QueryClientProvider>;
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
      graphql.query('Posts', (req, res, ctx) => {
        // When authenticated, respond with a query payload
        return res.networkError('Boom there was error');
      }),
      graphql.query('Navigation', (req, res, ctx) => {
        return res(
          ctx.data({
            navigations,
          })
        );
      })
    )
    return <QueryClientProvider client={mockedQueryClientError}><Story /></QueryClientProvider>;
  },
];
