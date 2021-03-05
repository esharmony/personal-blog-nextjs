import { NavigationItem } from '../../../hooks/useNavigation';
import NavBar from '../../Navigation/';

export interface HeaderProps {
    Items: NavigationItem[];
}

const Header = (props:HeaderProps): JSX.Element => {
    return <section className="sticky w-full text-center">
        <h1 className="font-headerFont text-3xl">Sabbatical dev</h1>
        <NavBar {...props} />
    </section>
} 

export default Header;