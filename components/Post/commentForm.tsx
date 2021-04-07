import { useEffect, useState } from 'react';
import { useCreateComment } from '../../hooks/useCreateComment';
import { CommentIdentityHelper } from './helpers/commentIdentityHelper';
import CommentFormButton from './commentFormButton';
import Form from './form';

export interface CommentsFormProps {
  PostSlug: string;
}

const CommentsForm = ({ PostSlug }: CommentsFormProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [validForm, setValidForm] = useState<boolean>(false);
  const [showCommentForm, setShowCommentForm] = useState<boolean>(false);
  const { mutateAsync, isError, isSuccess, isLoading } = useCreateComment();
  const [formErrored, setFormErrored] = useState<boolean>(false);
  const [formSucceeded, setFormSucceeded] = useState<boolean>(false);

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

  useEffect(() => {
    if (isError) setFormErrored(true);
  }, [isError]);

  useEffect(() => {
    if (isSuccess) setFormSucceeded(true);
  }, [isSuccess]);

  useEffect(() => {
    if (showCommentForm)
      window.scrollTo({ top: window.document.documentElement.scrollHeight });
  }, [showCommentForm]);

  const handleFormVisibility = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    !showCommentForm ? setShowCommentForm(true) : setShowCommentForm(false);
  };

  const handleSubmitForm = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const identity = CommentIdentityHelper({
      PostSlug: PostSlug,
      Date: new Date(),
    });
    await mutateAsync({
      Name: name,
      Comment: comment,
      CommentIdentity: identity,
    });
  };

  const handleResetForm = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setComment('');
    setName('');
    setValidForm(false);
    setFormSucceeded(false);
    setFormSucceeded(false);
    setShowCommentForm(false);
  };

  return (
    <>
      <CommentFormButton
        ShowCommentForm={showCommentForm}
        IsError={formErrored}
        IsSuccess={formSucceeded}
        HandleFormVisibility={handleFormVisibility}
        HandleResetForm={handleResetForm}
      />
      <br />
      <Form
        ShowCommentForm={showCommentForm}
        ValidForm={validForm}
        IsSuccess={formSucceeded}
        IsError={formErrored}
        IsLoading={isLoading}
        HandleSubmitForm={handleSubmitForm}
        SetName={setName}
        SetComment={setComment}
      />
    </>
  );
};

export default CommentsForm;
