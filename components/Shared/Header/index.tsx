import { NavigationItem } from '../../../hooks/useNavigation';
import NavBar from '../../Navigation/';

export interface HeaderProps {
    Items: NavigationItem[];
}

const Header = (props:HeaderProps): JSX.Element => {
    return <section className="header w-full text-center">
        <h1 className="font-headerFont text-gray-700 text-6xl md:text-7xl py-4">Sabbatical dev</h1>
        <NavBar {...props} />
    </section>
} 

export default Header;