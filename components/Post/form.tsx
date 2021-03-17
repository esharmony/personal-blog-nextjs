import Button from '../Shared/Button';

export interface FormProps {
  ShowCommentForm: boolean;
  IsSuccess: boolean;
  IsError: boolean;
  ValidForm: boolean;
  IsLoading: Boolean;
  HandleSubmitForm: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  SetName: (name: string) => void;
  SetComment: (comment: string) => void;
}

const Form = ({
  ShowCommentForm,
  IsSuccess,
  IsLoading,
  IsError,
  ValidForm,
  HandleSubmitForm,
  SetName,
  SetComment,
}: FormProps): JSX.Element => {
  return (
    <>
      {ShowCommentForm && !IsSuccess && !IsError && (
        <form className='md:w-1/2' id='commentForm'>
          <fieldset className='space-y-2'>
            <legend className=' border-gray-800 text-right my-2 inline-block'>
              Note: comments are reviewed before publishing
            </legend>
            <div className='flex items-center'>
              <label htmlFor='name' className='w-20 text-right mr-2'>
                Name:
              </label>
              <input
                name='name'
                placeholder='* 2 chars min'
                className='flex-1 h-10 p-2'
                onKeyUp={(e) => SetName(e.currentTarget.value)}
              />
            </div>
            <div className='flex'>
              <label htmlFor='comment' className='w-20 text-right mr-2'>
                Comment:
              </label>
              <textarea
                rows={5}
                name='comment'
                placeholder='* 10 chars min no longer than a tweet'
                className='flex-1 p-2'
                onKeyUp={(e) => SetComment(e.currentTarget.value)}
              />
            </div>
            {ValidForm && !IsLoading ? (
              <a
                href='#'
                onClick={HandleSubmitForm}
                className='float-right submitComment'
                role='button'
              >
                <Button text='Submit' />
              </a>
            ) : (
              <Button
                text='Submit'
                disabled={true}
                className='float-right disabledCommentButton'
              />
            )}
          </fieldset>
        </form>
      )}
      {IsSuccess && (
        <p>
          Thank you for submitting your comment, I will have a read and publish
          ASAP.
        </p>
      )}
      {IsError && <p>Sorry, there has been an error, please reset and retry.</p>}
    </>
  );
};

export default Form;
