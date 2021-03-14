import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';

import { Full } from '../Stories/commentForm.stories';

describe('Comment form', () => {
  let container: HTMLElement | null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container!!);
    container = null;
  });

  describe('when both name has more than 2 chars and comment has more than 10 and less than 280 chars', () => {
    it('should have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full />, container);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name above 2 chars' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'content above 10 chars and ready to test' },
      });

      const link = container?.querySelector(
        'a.submitComment'
      ) as HTMLAnchorElement;

      expect(link).not.toBe(null);
    });
  });

  describe('when both name has more than 2 chars but the comment has less than 10 chars', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full />, container);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name above 2 chars' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'too short' },
      });

      const link = container?.querySelector(
        'a.submitComment'
      ) as HTMLAnchorElement;

      expect(link).toBe(null);
    });
  });

  describe('when the name has less than 2 chars but the comment has more than 10 and less than 280', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full />, container);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'n' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'a good length of comment' },
      });

      const link = container?.querySelector(
        'a.submitComment'
      ) as HTMLAnchorElement;

      expect(link).toBe(null);
    });
  });

  describe('when the name has more than 2 chars but the comment has more than 280', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full />, container);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'name' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: {
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nibh tempus tellus venenatis euismod. Fusce commodo orci quis fermentum cursus. Nunc sit amet metus elit. Nunc at convallis nunc, sit amet maximus risus. Ut elementum mauris eget ex varius, at placerat purus ligula.',
        },
      });

      const link = container?.querySelector(
        'a.submitComment'
      ) as HTMLAnchorElement;

      expect(link).toBe(null);
    });
  });

  describe('when both name has less than 2 chars but the comment has less than 10 chars', () => {
    it('should not have the submit button', () => {
      let textArea: HTMLTextAreaElement;
      ReactDOM.render(<Full />, container);
      const input = container?.querySelector('input') as HTMLInputElement;

      fireEvent.keyUp(input, { target: { value: 'n' } });

      textArea = container?.querySelector('textarea') as HTMLTextAreaElement;
      fireEvent.keyUp(textArea, {
        target: { value: 'too short' },
      });

      const link = container?.querySelector(
        'a.submitComment'
      ) as HTMLAnchorElement;

      expect(link).toBe(null);
    });
  });
});
