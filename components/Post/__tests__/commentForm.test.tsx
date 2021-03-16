import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, screen } from '@testing-library/react';
import { Full } from '../Stories/commentForm.stories';
import { useCreateComment } from '../../../hooks/useCreateComment';

// test loading 
// test reset button
// test add comment button

//Add a healper to give a title to the postIndicator 

jest.mock('../../../hooks/useCreateComment', () => ({
  useCreateComment: jest.fn(),
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

  describe('when a user has clicked the comment button', () => {
    it('should show the form and replace the add comment button text to cancel', () => {
      ReactDOM.render(<Full PostSlug='slug' />, container);

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const addCommentButtonAfterClick = screen.queryByRole('button', {
        name: /Add a comment/i,
      });

      const cancelButton = screen.queryByRole('button', { name: /Cancel/i });
      const commentForm = container?.querySelector('#commentForm');

      expect(commentForm).not.toBe(null);
      expect(addCommentButtonAfterClick).toBe(null);
      expect(cancelButton).not.toBe(null);
    });
  });

  describe('when both name has more than 2 chars and comment has more than 10 and less than 280 chars', () => {
    it('should have the submit button but not the disabled button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full PostSlug='slug' />, container);

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

  describe('when both name has more than 2 chars but the comment has less than 10 chars', () => {
    it('should not have the submit button but have the disabled button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full PostSlug='slug' />, container);

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
      ReactDOM.render(<Full PostSlug='slug' />, container);

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
      ReactDOM.render(<Full PostSlug='slug' />, container);

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
      ReactDOM.render(<Full PostSlug='slug' />, container);

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

  describe('when the form is valid the comment is being sent and is loading', () => {
    it('should have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full PostSlug='slug' />, container);

      (useCreateComment as jest.Mock).mockImplementation(() => ({
        isLoading: true,
      }));

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

      expect(disabledButton).not.toBe(null);

      expect(link).toBe(null);
    });
  });

  describe('when the form is valid the comment is being sent has errored', () => {
    it('should have replaced the form with the error text', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full PostSlug='slug' />, container);

      (useCreateComment as jest.Mock).mockImplementation(() => ({
        isError: true,
      }));

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const form = container?.querySelector('form') as HTMLFormElement;

      const errorText = screen.getByText(
        'Sorry, there has been an error, please rest and retry.'
      );

      expect(form).toBe(null);
      expect(errorText).not.toBe(null);
    });
  });

  describe('when the form is valid the comment is being sent has been successful', () => {
    it('should have replaced the form with the success text', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full PostSlug='slug' />, container);

      (useCreateComment as jest.Mock).mockImplementation(() => ({
        isSuccess: true,
      }));

      const addCommentButton = screen.getByRole('button', {
        name: /Add a comment/i,
      });

      fireEvent.click(addCommentButton);

      const form = container?.querySelector('form') as HTMLFormElement;

      const errorText = screen.getByText(
        'Thank you for submitting your comment, I will have a read and publish ASAP.'
      );

      expect(form).toBe(null);
      expect(errorText).not.toBe(null);
    });
  });
});
