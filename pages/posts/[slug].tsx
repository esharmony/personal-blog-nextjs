import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import {
  fetchNavigation,
  fetchNavigationSlugs,
} from '../../hooks/useNavigation';
import { fetchFilteredPosts, useFilteredPosts, PostsData } from '../../hooks/usePosts';
import { ParsedUrlQuery } from 'node:querystring';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Head from 'next/head';
import Layout from '../../components/Shared/Layout';
import PostPreviews from '../../components/PostPreviews';
import { useRouter } from 'next/router';
import IsValidData from '../../helpers';

export interface PostsProps {
  slug: string;
}

const Posts = ({ slug }: PostsProps): JSX.Element => {
  const { data, isLoading, error } = useFilteredPosts(slug);
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{IsValidData(data) && data?.posts[0].navigation_item.MetaTitle || 'loading'}</title>
        <meta
          name='description'
          content={IsValidData(data) && data?.posts[0].navigation_item.MetaDescription || ''}
        />
        <meta property='og:title' content={IsValidData(data) && data?.posts[0].navigation_item.MetaDescription || ''} />
        <meta
          property='og:description'
          content={IsValidData(data) && data?.posts[0].navigation_item.MetaDescription || ''}
        />
        <meta
          property='og:image'
          content={IsValidData(data) && data?.posts[0]?.CoverImage?.url || ''}
        />
      </Head>
      {(isLoading || router.isFallback) && <img src='/loader.gif' className='m-auto' />}
      {IsValidData(data) && data?.posts.length && <PostPreviews Posts={data?.posts} />}
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
    fallback: true,
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
    revalidate:3600
  };
};

export default Posts;
