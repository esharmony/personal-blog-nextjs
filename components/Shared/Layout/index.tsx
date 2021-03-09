import Head from 'next/head';
import Header from '../Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='author' content='Matthew Barnden' />
      </Head>
      <Header />
      <img
        src='/tree.png'
        alt='sabbatical dev'
        className='fixed bottom-0 right-0 h-1/2 w-auto opacity-30 object-contain object-right-bottom'
      />
      <img
        src='/birds.png'
        alt='technical blog'
        className='fixed top-150 opacity-30 h-2/4 object-contain object-right-top'
      />
      {children}
    </>
  );
};

export default Layout;
