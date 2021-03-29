import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import {
  fetchPosts,
  Post as IPost,
  PostsData,
} from '../hooks/usePosts';
import {
  fetchNavigation,
  NavigationData,
  NavigationItem,
} from '../hooks/useNavigation';
import { GetStaticProps } from 'next';
import PostPreviews from '../components/PostPreviews';
import Layout from '../components/Shared/Layout';
import Head from 'next/head';
import { generateSitemap } from '../generateSitemap';

export interface IndexPageProps {
  Posts: IPost[];
  NavigationItems: NavigationItem[];
}

const Index = ({ Posts, NavigationItems }: IndexPageProps): JSX.Element => {
  return (
    <Layout navigationItems={NavigationItems}>
      <Head>
        <title>Sabbatical dev's technical posts whilst studying</title>
        <meta
          name='description'
          content='Technical posts normally around React, React Native, testing and opinions on tech in general'
        />
        <meta
          property='og:title'
          content="Sabbatical dev's technical posts whilst studying"
        />
        <meta
          property='og:description'
          content='Technical posts normally around React, React Native, testing and opinions on tech in general'
        />
        <meta property='og:image' content={Posts[0].CoverImage?.url || ''} />
      </Head>
      <PostPreviews Posts={Posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', () => fetchPosts());

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  const postData = queryClient.getQueryData('posts') as PostsData;
  const navigationData = queryClient.getQueryData(
    'navigation'
  ) as NavigationData;

  generateSitemap(
    postData?.posts[0]?.SortDate,
    navigationData?.navigations,
    postData.posts
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      Posts: postData.posts,
      NavigationItems: navigationData.navigations,
    },
    revalidate: 3600,
  };
};

export default Index;
