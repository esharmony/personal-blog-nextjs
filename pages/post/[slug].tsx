import {
  fetchPostSlugs,
  fetchPost,
  Post as IPost,
  PostsData,
} from '../../hooks/usePosts';
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import {
  fetchNavigation,
  NavigationItem,
  NavigationData,
} from '../../hooks/useNavigation';
import { ParsedUrlQuery } from 'node:querystring';
import Post from '../../components/Post';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Head from 'next/head';
import Layout from '../../components/Shared/Layout';
import { useRouter } from 'next/router';

export interface PostProps {
  PostData: IPost;
  NavigationItems: NavigationItem[];
}

const PostPage = ({ PostData, NavigationItems }: PostProps): JSX.Element => {
  const router = useRouter();

  return (
    <Layout navigationItems={NavigationItems}>
      <Head>
        <title>{router.isFallback ? '' : PostData.MetaTitle}</title>
        <meta
          name='description'
          content={router.isFallback ? '' : PostData.MetaDescription}
        />
        <meta
          property='og:title'
          content={router.isFallback ? '' : PostData.MetaTitle}
        />
        <meta
          property='og:description'
          content={router.isFallback ? '' : PostData.MetaDescription}
        />
        <meta
          property='og:image'
          content={router.isFallback ? '' : PostData.CoverImage?.url}
        />
      </Head>
      {router.isFallback && <img src='/loader.gif' className='m-auto' />}
      {!router.isFallback && PostData.id !== 'undefined' && <Post Post={PostData} IsLoading={router.isFallback} />}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  const pathsQueryData = await fetchPostSlugs();

  console.log(pathsQueryData)

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

  const postsData = queryClient.getQueryData(['post', slug]) as PostsData;
  const navigationData = queryClient.getQueryData('navigation') as NavigationData;


  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      PostData: postsData.posts[0],
      NavigationItems: navigationData.navigations,
    },
    revalidate: 3600,
  };
};

export default PostPage;
