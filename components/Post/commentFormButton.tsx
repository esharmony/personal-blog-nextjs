import Button from '../Shared/Button';

interface CommentFormButtonProps {
  ShowCommentForm: boolean;
  IsError: boolean;
  IsSuccess: boolean;
  HandleResetForm: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  HandleFormVisibility: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const CommentFormButton = ({
  ShowCommentForm,
  IsSuccess,
  IsError,
  HandleFormVisibility,
  HandleResetForm,
}: CommentFormButtonProps): JSX.Element => {

  const getButtonText = (): JSX.Element => {
    if (!ShowCommentForm && !IsSuccess && !IsError)
      return <Button text='Add a comment' />;
    if (IsSuccess || IsError) return <Button text='Reset' />;
    return <Button text='Cancel' />;
  };

  return (
    <a
      href='#'
      role='button'
      onClick={!IsSuccess && !IsError ? HandleFormVisibility : HandleResetForm }
      className='mx-4 md:mx-0 py-8 inline-block'
    >
      {getButtonText()}
    </a>
  );
};

export default CommentFormButton;
