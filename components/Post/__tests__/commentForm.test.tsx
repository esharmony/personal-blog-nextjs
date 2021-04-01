import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, screen } from '@testing-library/react';
import CommentsForm from '../commentForm';
import { useCreateComment } from '../../../hooks/useCreateComment';
import { CommentIdentityHelper } from '../helpers/commentIdentityHelper';

jest.mock('../../../hooks/useCreateComment', () => ({
  useCreateComment: jest.fn(),
}));

jest.mock('../helpers/commentIdentityHelper', () => ({
  CommentIdentityHelper: jest.fn(),
}));

describe('Comment form', () => {
  let container: HTMLElement | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    (useCreateComment as jest.Mock).mockImplementation(() => ({}));
  });

  afterEach(() => {
    document.body.removeChild(container!!);
    container = null;
    jest.clearAllMocks();
  });

  describe('when both name has more than 2 chars and comment has more than 10 and less than 280 chars', () => {
    it('should have the submit button but not the disabled button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name above 2 chars' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'content above 10 chars and ready to test' },
      });

      const link = screen.queryByRole('button', {
        name: /submit/i,
      });

      const disabledButton = screen.queryByTitle('Disabled');

      expect(disabledButton).toBe(null);

      expect(link).not.toBe(null);
    });
  });

  describe('when a user has opened the comment form and decides to close it', () => {
    it('after pressing the cancel button the form should no longer be visible', () => {
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const form = container?.querySelector('form') as HTMLFormElement;

      expect(form).not.toBe(null);

      const cancelButton = screen.getByRole('button', {
        name: /Cancel/i,
      });

      fireEvent.click(cancelButton);

      const formAfterCancel = container?.querySelector(
        'form'
      ) as HTMLFormElement;

      expect(formAfterCancel).toBe(null);
    });
  });

  describe('when both name has more than 2 chars but the comment has less than 10 chars', () => {
    it('should not have the submit button but have the disabled button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name above 2 chars' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'too short' },
      });

      const link = screen.queryByRole('button', {
        name: /submit/i,
      });

      const disabledButton = screen.queryByTitle('Disabled');

      expect(disabledButton).not.toBe(null);

      expect(link).toBe(null);
    });
  });

  describe('when the name has less than 2 chars but the comment has more than 10 and less than 280', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'n' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'a good length of comment' },
      });

      const link = screen.queryByRole('button', {
        name: /submit/i,
      });

      const disabledButton = screen.queryByTitle('Disabled');

      expect(disabledButton).not.toBe(null);

      expect(link).toBe(null);
    });
  });

  describe('when the name has more than 2 chars but the comment has more than 280', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: {
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nibh tempus tellus venenatis euismod. Fusce commodo orci quis fermentum cursus. Nunc sit amet metus elit. Nunc at convallis nunc, sit amet maximus risus. Ut elementum mauris eget ex varius, at placerat purus ligula.',
        },
      });

      const link = screen.queryByRole('button', {
        name: /submit/i,
      });

      expect(link).toBe(null);
    });
  });

  describe('when both name has less than 2 chars but the comment has less than 10 chars', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'n' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'too short' },
      });

      const link = screen.queryByRole('button', {
        name: /submit/i,
      });

      const disabledButton = screen.queryByTitle('Disabled');

      expect(disabledButton).not.toBe(null);

      expect(link).toBe(null);
    });
  });

  describe('when the form has errored', () => {
    beforeEach(() => {
      (useCreateComment as jest.Mock).mockImplementation(() => ({
        isError: true,
        isLoading: false,
      }));
    });
    it('you should be able to reset the form', () => {
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const form = container?.querySelector('form') as HTMLFormElement;

      const resetButton = screen.getByRole('button', {
        name: /Reset/i,
      });

      fireEvent.click(resetButton);

      expect(form).toBe(null);
      expect(addCommentButton).not.toBe(null);
    });
  });

  describe('when the form has succeeded', () => {
    beforeEach(() => {
      (useCreateComment as jest.Mock).mockImplementation(() => ({
        isSuccess: true,
        isLoading: false,
      }));
      afterEach(() => {
        jest.clearAllMocks();
      });
    });

    it('you should be able to reset the form', () => {
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const form = container?.querySelector('form') as HTMLFormElement;

      const resetButton = screen.getByRole('button', {
        name: /Reset/i,
      });

      fireEvent.click(resetButton);

      expect(form).toBe(null);
      expect(addCommentButton).not.toBe(null);
    });
  });

  describe('when submitting a form', () => {
    const mutateAsyncFunc = jest.fn();

    beforeEach(() => {
      (CommentIdentityHelper as jest.Mock).mockImplementation(
        () => '[slug]:23/03/2000-23:00'
      );
      (useCreateComment as jest.Mock).mockImplementation(() => ({
        mutateAsync: mutateAsyncFunc,
      }));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be called passing the name, comment and the id from the comment identity helper', () => {
      ReactDOM.render(<CommentsForm PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name' } });

      const textArea = container?.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'A really good comment' },
      });

      const submitButton = screen.getByRole('button', {
        name: /submit/i,
      });

      fireEvent.click(submitButton);

      expect(mutateAsyncFunc).toHaveBeenCalledWith({
        Name: 'name',
        Comment: 'A really good comment',
        CommentIdentity: '[slug]:23/03/2000-23:00'
      });
    });
  });
});
