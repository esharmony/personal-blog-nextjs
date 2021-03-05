import postLinkTextHelper from '../postLinkTextHelper';

describe('post link text helper', () => {
  describe('when the post is of type Tutorial', () => {
    it('should return the text "learn"', () => {
      const result = postLinkTextHelper('Tutorial');
      expect(result).toEqual('learn');
    });
  });
  describe('when the post is of type Vlog', () => {
    it('should return the text "watch"', () => {
      const result = postLinkTextHelper('Vlog');
      expect(result).toEqual('watch');
    });
  });
  describe('when the post is of type VideoTutorial', () => {
    it('should return the text "watch & learn"', () => {
      const result = postLinkTextHelper('VideoTutorial');
      expect(result).toEqual('watch & learn');
    });
  });
  describe('when the post is of type Article', () => {
    it('should return the text "read"', () => {
      const result = postLinkTextHelper('Article');
      expect(result).toEqual('read');
    });
  });
  describe('when the post is of type QuickTip', () => {
    it('should return the text "read"', () => {
      const result = postLinkTextHelper('QuickTip');
      expect(result).toEqual('read');
    });
  });
});
