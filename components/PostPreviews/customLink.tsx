import { Post } from '../../hooks/usePosts';
import PostLinkTextHelper from './helpers/postLinkTextHelper';
import Button from '../Shared/Button';
import Link from 'next/link';

const CustomLink = (post: Post): JSX.Element => {
  if (
    (post.PostType === 'VideoTutorial' && post.YouTubeLink !== '') ||
    (post.PostType === 'Vlog' && post.YouTubeLink !== '')
  ) {
    return (
      <a
        className='absolute bottom-4 right-4'
        href={post.YouTubeLink}
        target='_blank'
      >
        <Button text={PostLinkTextHelper(post.PostType)} />
      </a>
    );
  } else {
    return (
      <Link href={`/post/${post.Slug}`}>
        <a className='absolute bottom-4 right-4'>
          <Button text={PostLinkTextHelper(post.PostType)} />
        </a>
      </Link>
    );
  }
};

export default CustomLink;
