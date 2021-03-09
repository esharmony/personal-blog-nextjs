
import NavBar from '../../Navigation/';
import { NavigationItem, useNavigation } from '../../../hooks/useNavigation';


const Header = (): JSX.Element => {

    const { data, error, isLoading } = useNavigation();

    return <section className="header w-full text-center">
        <h1 className="font-headerFont text-gray-700 text-6xl md:text-7xl py-4">Sabbatical dev</h1>
        {isLoading && <p className="mx-auto mb-10">loading...</p>}
        {error && <p className="text-center text-red-500 bg-black">Sorry, there has been an error loading the navigation</p>}
        {data?.navigations.length && <NavBar Items = {data.navigations} /> }
    </section>
} 

export default Header;