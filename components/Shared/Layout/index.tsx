import Head from 'next/head';
import { useNavigation } from '../../../hooks/useNavigation';
import Header from '../Header'

const Layout = (props:any): JSX.Element => {
    const { data } = useNavigation();
    console.log(data?.navigations)

    return (
        <>
            <Head>
                <title>Sabatical Dev</title>
                <meta name="description" content="Develeloper blog for a dev on sabbatical" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="author" content="Matthew Barnden"/>
            </Head>
            {data?.navigations.length ? <Header Items={data?.navigations} /> : null}
            <div>{props.children}</div>
        </>
    )
}

export default Layout;