import { CommentIdentityHelper } from '../helpers/commentIdentityHelper';

describe('Comment Identity Helper', () => {
  describe('when a comment identity is requested', () => {
    it('should provide a formated date and time prefixed with the post slug', () => {
      const date = new Date(2021, 2, 20, 20, 0, 0, 0);
      expect(CommentIdentityHelper({ PostSlug: 'slug', Date: date })).toEqual(
        '[slug]20/03/2021-20:00:00'
      );
    });
  });
});
