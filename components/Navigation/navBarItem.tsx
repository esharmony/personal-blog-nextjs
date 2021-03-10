import { useRouter } from 'next/router';
import { NavigationItem } from '../../hooks/useNavigation';
import Link from 'next/link';
import Button from '../Shared/Button';

const NavBarItem = (props: NavigationItem): JSX.Element => {
  const router = useRouter();
  console.log(router.asPath);
  return router.asPath ===
    `${props.Slug === '/' ? `${props.Slug}` : `/posts/${props.Slug}`}` ? (
    <Button text={props.Item} selected={true} />
  ) : (
    <Link href={`${props.Slug === '/' ? '/' : `/posts/${props.Slug}`}`}>
      <a>
        <Button text={props.Item} />
      </a>
    </Link>
  );
};

export default NavBarItem;
