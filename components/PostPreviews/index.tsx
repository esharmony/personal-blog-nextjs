import { Post as IPost } from '../../hooks/usePosts';
import PostPreview from './postPreview';

export interface PostPreviewsProps {
    Posts:IPost[]
}

const PostPreviews = (props: PostPreviewsProps): JSX.Element => {
  return (
    <section className='previews flex justify-center row flex-wrap max-w-5xl mx-auto'>
      {props.Posts.map(post => {
        return (
            <PostPreview Post={post} key={`key-${post.id}`} />
        );
      })}
    </section>
  );
};

export default PostPreviews;
