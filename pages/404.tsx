import Layout from '../components/Shared/Layout';
import Head from 'next/head';
import { fetchNavigation } from '../hooks/useNavigation';
import { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
export default function Custom404(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1 className='mx-auto py-2 text-2xl text-gray-800 text-center'>
        404 - Page Not Found
      </h1>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('navigation', () => fetchNavigation());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
