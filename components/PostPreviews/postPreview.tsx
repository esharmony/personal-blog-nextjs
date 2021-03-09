import Button from '../Shared/Button';
import PostTypeTextHelper from './helpers/postLinkTextHelper';
import MainImage from '../Post/mainImage';
import { Post } from '../../hooks/usePosts';
import PostTypeIndicator from '../Post/postTypeIndicator';
import BodyText from '../Post/bodyText';

export interface PostPreviewProps {
  Post: Post;
}

const PostPreview = (props: PostPreviewProps): JSX.Element => {
  return (
    <div
      className={
        'w-full md:w-1/2 lg:w-1/3 md:max-w-xs relative postBg h-96 postPreview mx-2 mb-2 md:mb-4'
      }
    >
      <MainImage
        Url={props.Post.CoverImage.url}
        Title={props.Post.Title}
        IsPreview={true}
      />
      <PostTypeIndicator {...props.Post} IsPreview={true} />
      <h1 className='text-2xl px-5 text-gray-800 font-mainFont'>
        {props.Post.Title}
      </h1>
      <h2 className='text-xl px-5 text-gray-800 font-mainFont'>
        {props.Post.SubTitle}
      </h2>
      <BodyText Text={props.Post.ShortBody} />
      <a href='#' className='absolute bottom-4 right-4'>
        <Button text={PostTypeTextHelper(props.Post.PostType)} />
      </a>
    </div>
  );
};

export default PostPreview;