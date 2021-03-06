import Head from 'next/head';
import { useNavigation } from '../../../hooks/useNavigation';
import Header from '../Header';

const Layout = (props:any): JSX.Element => {
    const { data } = useNavigation();

    return (
        <>
            <Head>
                <title>{`${props.MetaTitle} -  'Sabbatical Dev'`}</title>
                <meta name="description" content={`${props.MetaTitle || "Develeloper blog for a dev on sabbatical"}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="author" content="Matthew Barnden"/>
            </Head>
            {data?.navigations.length ? <Header Items={data?.navigations} /> : null}
            <img src="/tree.png" alt="sabbatical dev" className="fixed bottom-0 right-0 h-2/3 w-auto opacity-30 object-contain object-right-bottom"/>
            <img src="/birds.png" alt="technical blog" className="fixed top-150 opacity-30 h-2/4 object-contain object-right-top" />
            {props.children}
        </>
    )
}

export default Layout;