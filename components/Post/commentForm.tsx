import { useEffect, useState } from 'react';
import Button from '../Shared/Button';

const CommentsForm = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [validForm, setValidForm] = useState<boolean>(false);

  useEffect(() => {
    if (
      name.length > 1 &&
      name.length < 20 &&
      comment.length > 10 &&
      comment.length < 280
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [name, comment]);

  return (
    <form className='md:w-1/2'>
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
            onKeyUp={(e) => setName(e.currentTarget.value)}
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
            onKeyUp={(e) => setComment(e.currentTarget.value)}
          />
        </div>
        {validForm ? (
          <a
            href='#'
            onClick={() => console.log('clicked')}
            className='float-right submitComment'
          >
            <Button text='Submit' />
          </a>
        ) : (
          <Button text='Submit' disabled={true} className="float-right disabledCommentButton" />
        )}
      </fieldset>
    </form>
  );
};

export default CommentsForm;
