import Button from '../Shared/Button';
import PostTypeTextHelper from './helpers/postLinkTextHelper';
import PostLinkHelper from './helpers/postLinkHelper';
import MainImage from '../Post/mainImage';
import { Post } from '../../hooks/usePosts';
import PostTypeIndicator from '../Post/postTypeIndicator';
import BodyText from '../Post/bodyText';
import Link from 'next/link';

export interface PostPreviewProps {
  Post: Post;
}

const PostPreview = (props: PostPreviewProps): JSX.Element => {
  const { Post } = props;

  return (
    <div
      className={
        'w-full md:w-1/2 lg:w-1/3 md:max-w-xs relative postBg h-96 postPreview mx-2 mb-2 md:mb-4'
      }
    >
      <MainImage
        Url={Post.CoverImage.url}
        Title={Post.Title}
        IsPreview={true}
      />
      <PostTypeIndicator {...Post} IsPreview={true} />
      <h1 className='text-2xl px-5 text-gray-800 font-mainFont'>
        {Post.Title}
      </h1>
      <h2 className='text-xl px-5 text-gray-800 font-mainFont'>
        {Post.SubTitle}
      </h2>
      <BodyText Text={Post.ShortBody} />
      <Link href={PostLinkHelper(Post)}>
        <a className='absolute bottom-4 right-4'>
          <Button text={PostTypeTextHelper(Post.PostType)} />
        </a>
      </Link>
    </div>
  );
};

export default PostPreview;
