import Layout from '../components/Shared/Layout';
import Head from 'next/head';
import {
  fetchNavigation,
  NavigationItem,
  NavigationData,
} from '../hooks/useNavigation';
import { GetStaticProps } from 'next';

export interface Custom404Props {
  NavigationItems: NavigationItem[];
}

export default function Custom404({
  NavigationItems,
}: Custom404Props): JSX.Element {
  return (
    <Layout navigationItems={NavigationItems}>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1 className='mx-auto py-2 text-2xl text-gray-800 text-center'>
        404 - Page Not Found
      </h1>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const navigationData = (await fetchNavigation()) as NavigationData;

  return {
    props: {
      NavigationItems: navigationData.navigations,
    },
  };
};
