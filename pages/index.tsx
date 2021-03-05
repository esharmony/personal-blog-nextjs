import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchPosts, usePosts, Post as IPost } from '../hooks/usePosts';
import { fetchNavigation } from '../hooks/useNavigation';
import { GetStaticProps } from 'next';
import PostPreviews from '../components/PostPreviews';
import Layout from '../components/Shared/Layout';

const Index = (props: any): JSX.Element => {
  const { data, isLoading } = usePosts();
  return (
    <>
    {isLoading && <h1>Loading...</h1>}
    <Layout
      {...{
        ...props,
        MetaTitle: 'this title',
        MetaDescription: 'this is the description',
      }}
    >
      {data?.posts.length ? (
        <PostPreviews Posts={data?.posts} />
      ) : (
        'error no posts found'
      )}
    </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts', 20], () => fetchPosts(20));

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
