
import NavBar from '../../Navigation/';
import { NavigationItem } from '../../../hooks/useNavigation';

export interface HeaderProps {
    navigationItems: NavigationItem[]
} 


const Header = ({ navigationItems }: HeaderProps): JSX.Element => {

    return <section className="header w-full text-center">
        <h1 className="font-headerFont text-gray-700 text-6xl md:text-7xl py-4">Sabbatical dev</h1>
        {/* {isLoading && <p className="mx-auto mb-10">loading...</p>}
        {error && <p className="text-center text-red-500 bg-black">Sorry, there has been an error loading the navigation</p>} */}
        <NavBar Items = {navigationItems} />
    </section>
} 

export default Header;