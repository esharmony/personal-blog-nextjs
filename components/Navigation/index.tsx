import NavBarItem from './navBarItem';
import { NavigationItem } from '../../hooks/useNavigation';

export interface NavBarProps {
  Items: NavigationItem[];
}

const NavBar = (props: NavBarProps): JSX.Element => {
  return (
    <nav className="max-w-5xl overflow-x-auto mx-auto text-center">
      <ul className='mb-8 whitespace-nowrap'>
        <li className='inline mr-1' key={'index-link'}>
          <NavBarItem Item='Latest' Slug='/' updatedAt='' />
        </li>
        {props?.Items?.map((item) => {
          return (
            <li className='inline mr-1' key={item.Slug}>
              <NavBarItem {...item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
