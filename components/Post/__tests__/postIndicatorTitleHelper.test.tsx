import PostIndicatorTitleHelper from '../helpers/postIndicatorTitleHelper';

describe('Post indicator title helper', () => {
  describe('when type is article', () => {
    it('should return Article', () => {
      expect(PostIndicatorTitleHelper('Article')).toEqual('Article');
    });
  });
  describe('when type is vlog', () => {
    it('should return Vlog', () => {
      expect(PostIndicatorTitleHelper('Vlog')).toEqual('Vlog');
    });
  });
  describe('when type is tutorial', () => {
    it('should return Tutorial', () => {
      expect(PostIndicatorTitleHelper('Tutorial')).toEqual('Tutorial');
    });
  });
  describe('when type is video tutorial', () => {
    it('should return Video Tutorial', () => {
      expect(PostIndicatorTitleHelper('VideoTutorial')).toEqual(
        'Video Tutorial'
      );
    });
  });

  describe('when type is quick tip', () => {
    it('should return Quick Tip', () => {
      expect(PostIndicatorTitleHelper('QuickTip')).toEqual('Quick Tip');
    });
  });
});
