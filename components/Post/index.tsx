import { Post as IPost } from '../../hooks/usePosts';
import MainImage from './mainImage';
import BodyText from './bodyText';
import Comments from './comments';
import PostTypeIndicator from '../Post/postTypeIndicator';

const Post = (post: IPost): JSX.Element => {
  return (
    <section className='max-w-5xl md:p-10 mx-2 md:mx-auto relative bg-gradient-to-br postBg'>
        <MainImage Url={post.CoverImage?.url} Title={post.Title} />
        <PostTypeIndicator {...post} />
        <h1 className='text-2xl px-5 md:px-0 md:text-5xl text-gray-800 font-mainFont'>
          {post.Title}
        </h1>
        <h2 className='text-xl px-5 md:px-0 md:text-3xl text-gray-800 md:mt-2 font-mainFont'>
          {post.SubTitle}
        </h2>
        <BodyText Text={post.Body} />
        <Comments {...post} />
    </section>
  );
};

export default Post;
