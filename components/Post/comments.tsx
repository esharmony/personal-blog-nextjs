import { Comment } from '../../hooks/usePosts';
import CommentForm from './commentForm';

export interface CommentProps {
  Comments: Comment[];
  PostSlug: string;
}

const noComments =
  'There have been no comments as of yet, feel free to share : )';

const Comments = ({ Comments, PostSlug }: CommentProps): JSX.Element | null => {
  return (
    <>
      <hr className='mx-4 md:mx-0 border-gray-800 h-4 border-t-2 mt-10' />
      <h2 className='mx-4 md:mx-0 text-xl md:text-2xl text-gray-800 py-2 font-mainFont'>
        Comments
      </h2>
      <ul>
        {Comments?.length > 0 ? (
          Comments.map((comment) => {
            return (
              <li
                className='mx-4 md:mx-0 text-l md:text-xl text-gray-800 mt-3'
                key={`key-${comment.id}`}
              >
                <strong>{comment.Name}</strong> - {comment.Comment}
              </li>
            );
          })
        ) : (
          <li className='mx-4 md:mx-0 text-l md:text-xl text-gray-800 mt-5'>
            {noComments}
          </li>
        )}
      </ul>
      <CommentForm PostSlug={PostSlug} />
    </>
  );
};

export default Comments;
