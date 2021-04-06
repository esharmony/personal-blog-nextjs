import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import {
  fetchNavigation,
  fetchNavigationSlugs,
  NavigationData,
  NavigationItem,
} from '../../hooks/useNavigation';
import { fetchFilteredPosts, PostsData, Post } from '../../hooks/usePosts';
import { ParsedUrlQuery } from 'node:querystring';
import Head from 'next/head';
import Layout from '../../components/Shared/Layout';
import PostPreviews from '../../components/PostPreviews';
import { useRouter } from 'next/router';

export interface PostsProps {
  Posts: Post[];
  NavigationItems: NavigationItem[];
}

const Posts = ({ Posts, NavigationItems }: PostsProps): JSX.Element => {
  const router = useRouter();
  return (
    <Layout navigationItems={NavigationItems}>
      <Head>
        <title>
          {router.isFallback || !Posts
            ? 'loading'
            : Posts[0].navigation_item.MetaTitle}
        </title>
        <meta name="twitter:card" content="summary"/>
        <meta
          name='description'
          content={
            router.isFallback || !Posts
              ? ''
              : Posts[0].navigation_item.MetaDescription
          }
        />
        <meta
          property='og:title'
          content={
            router.isFallback || !Posts
              ? ''
              : Posts[0].navigation_item.MetaDescription
          }
        />
        <meta
          property='og:description'
          content={
            router.isFallback || !Posts
              ? ''
              : Posts[0].navigation_item.MetaDescription
          }
        />
        <meta
          property='og:image'
          content={router.isFallback || !Posts ? '' : Posts[0]?.CoverImage?.url}
        />
      </Head>
      {router.isFallback && <img src='/loader.gif' className='m-auto' />}
      {!router.isFallback && Posts && <PostPreviews Posts={Posts} />}
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
  const filteredPostsData = (await fetchFilteredPosts(slug)) as PostsData;
  const navigationData = (await fetchNavigation()) as NavigationData;

  return {
    props: {
      Posts: filteredPostsData?.posts,
      NavigationItems: navigationData?.navigations,
    },
    revalidate: 3600,
  };
};

export default Posts;
