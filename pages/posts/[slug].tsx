import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import {
  fetchNavigation,
  fetchNavigationSlugs,
} from '../../hooks/useNavigation';
import { fetchFilteredPosts, useFilteredPosts } from '../../hooks/usePosts';
import { ParsedUrlQuery } from 'node:querystring';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Head from 'next/head';
import Layout from '../../components/Shared/Layout';
import PostPreviews from '../../components/PostPreviews';

export interface PostsProps {
  slug: string;
}

const Posts = ({ slug }: PostsProps): JSX.Element => {
  const { data, isLoading, error } = useFilteredPosts(slug);

  return (
    <Layout>
      <Head>
        <title>{`${data?.posts[0].navigation_item.MetaTitle || 'Posts'}`}</title>
        <meta
          name='description'
          content={`${data?.posts[0].navigation_item.MetaDescription || ''}`}
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

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  const pathsQueryData = await fetchNavigationSlugs();
  const paths = pathsQueryData.navigations.map((item) => ({
    params: {
      slug: item.Slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['filteredPosts', slug], () =>
    fetchFilteredPosts(slug)
  );

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};

export default Posts;
