import Button from '../Shared/Button';
import { Comment } from '../../hooks/usePosts';

export interface CommentProps {
  Comments: Comment[];
  IsLoading: boolean;
  Error: unknown;
}

const noComments =
  'There have been no comments as of yet, feel free to share : )';

const Comments = ({
  Comments,
  IsLoading,
  Error,
}: CommentProps): JSX.Element | null => {
  if (IsLoading || Error) return null;
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
      <a href='#' className='mx-4 md:mx-0 py-8 inline-block'>
        <Button text='Add a comment' />
      </a>
    </>
  );
};

export default Comments;
