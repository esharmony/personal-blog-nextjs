import {
  fetchPostSlugs,
  fetchPost,
  Post as IPost,
  usePost,
} from '../../hooks/usePosts';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import { fetchNavigation } from '../../hooks/useNavigation';
import { ParsedUrlQuery } from 'node:querystring';
import Post from '../../components/Post';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Head from 'next/head';
import Layout from '../../components/Shared/Layout';
import { generateSitemapPosts } from '../../generateSitemap';
import { useRouter } from 'next/router';
import IsValidData from '../../helpers';

export interface PostProps {
  slug: string;
}

const PostPage = ({ slug }: PostProps): JSX.Element => {
  const { data, isLoading, error } = usePost(slug);
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>
          {(IsValidData(data) && data?.posts[0].MetaTitle) || 'loading'}
        </title>
        <meta
          name='description'
          content={
            (IsValidData(data) && data?.posts[0]?.MetaDescription) || 'loading'
          }
        />
        <meta
          property='og:title'
          content={
            (IsValidData(data) && data?.posts[0]?.MetaTitle) || 'loading'
          }
        />
        <meta
          property='og:description'
          content={
            (IsValidData(data) && data?.posts[0]?.MetaDescription) || 'loading'
          }
        />
        <meta
          property='og:image'
          content={(IsValidData(data) && data?.posts[0]?.CoverImage?.url) || ''}
        />
      </Head>
      {(isLoading || router.isFallback) && (
        <img src='/loader.gif' className='m-auto' />
      )}
      {error && (
        <p className='text-center text-red-500 bg-black'>
          Sorry, there has been an error loading the post
        </p>
      )}
      {IsValidData(data) && (
        <Post
          Post={data?.posts[0] as IPost}
          IsLoading={isLoading}
          Error={error}
        />
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  const pathsQueryData = await fetchPostSlugs();

  generateSitemapPosts(pathsQueryData.posts);

  const paths = pathsQueryData.posts.map((post) => ({
    params: {
      slug: post.Slug,
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

  await queryClient.prefetchQuery(['post', slug], () => fetchPost(slug));

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
    revalidate: 3600,
  };
};

export default PostPage;
