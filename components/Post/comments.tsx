import Button from '../Shared/Button';

export interface Comment {
  Comment: string;
  Name: string;
}

export interface CommentProps {
  Comments: Comment[];
}

const noComments = 'There have been no comments as of yet, feel free to share : )';

const Comments = (props: CommentProps) => {
  return (
    <>
      <hr className="mx-4 md:mx-0 border-gray-800 h-4 border-t-2 mt-10" />
      <h2 className="mx-4 md:mx-0 text-xl md:text-2xl text-gray-800 py-2 font-mainFont">Comments</h2>
      <ul>
        {props.Comments.length > 0
          ? props.Comments.map((comment) => {
              return (
                <li className="mx-4 md:mx-0 text-l md:text-xl text-gray-800 mt-3">
                  <strong>{comment.Name}</strong> - {comment.Comment}
                </li>
              );
            })
          : <li className="mx-4 md:mx-0 text-l md:text-xl text-gray-800 mt-5">{noComments}</li>}
      </ul>
      <a href="#" className="mx-4 md:mx-0 py-8 inline-block">
        <Button text="Add a comment" />
      </a>
    </>
  );
};

export default Comments;
