import { Post as IPost } from '../../hooks/usePosts';
import MainImage from './mainImage';
import BodyText from './bodyText';
import Comments from './comments';
import PostTypeIndicator from '../Post/postTypeIndicator';
import CommentForm from './commentForm';

export interface PostProps {
  Post: IPost;
  IsLoading: boolean;
  Error: unknown;
}

const Post = ({ Post, IsLoading, Error }: PostProps): JSX.Element => {
  return (
    <section className='max-w-5xl md:p-10 mx-2 lg:mx-auto relative bg-gradient-to-br postBg'>
      <MainImage Url={Post.CoverImage?.url} Title={Post.Title} />
      <PostTypeIndicator {...Post} />
      <h1 className='text-2xl px-5 md:px-0 md:text-5xl text-gray-800 font-mainFont'>
        {Post.Title}
      </h1>
      <h2 className='text-xl px-5 md:px-0 md:text-3xl text-gray-800 md:my-3 font-mainFont'>
        {Post.SubTitle}
      </h2>
      <BodyText Text={Post.Body} />
      <Comments Comments={Post.Comments} IsLoading={IsLoading} Error={Error} />
      {/* needs post slug */}
      <CommentForm />
    </section>
  );
};

export default Post;
