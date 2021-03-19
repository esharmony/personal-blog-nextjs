import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchPosts, usePosts, Post as IPost, PostsData } from '../hooks/usePosts';
import { fetchNavigation, NavigationData } from '../hooks/useNavigation';
import { GetStaticProps } from 'next';
import PostPreviews from '../components/PostPreviews';
import Layout from '../components/Shared/Layout';
import Head from 'next/head';
import { generateSitemapIndex } from '../generateSitemap';

const Index = (): JSX.Element => {
  const { data, isLoading, error } = usePosts();

  return (
    <Layout>
      <Head>
        <title>Sabbatical dev's technical posts whilst studying</title>
        <meta
          name='description'
          content='Technical posts normally around React, React Native, testing and opinions on tech in general'
        />
      </Head>
      {isLoading && <img src='/loader.gif' className='m-auto' />}
      {data?.posts.length && <PostPreviews Posts={data?.posts} />}
      {error && (
        <p className='text-center text-red-500 bg-black'>
          Sorry, there has been an error loading the posts
        </p>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', () => fetchPosts());

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  const postData = queryClient.getQueryData('posts') as PostsData;
  const navigationData = queryClient.getQueryData('navigation') as NavigationData;

 
  generateSitemapIndex(postData?.posts[0]?.SortDate, navigationData?.navigations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
