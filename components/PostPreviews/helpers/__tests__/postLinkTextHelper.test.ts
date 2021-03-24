import postLinkTextHelper from '../postLinkTextHelper';

describe('post link text helper', () => {
  describe('when the post is of type Tutorial', () => {
    it('should return the text "learn"', () => {
      const result = postLinkTextHelper({ postType:'Tutorial'});
      expect(result).toEqual('learn');
    });
  });
  describe('when the post is of type Vlog and has a youtube link', () => {
    it('should return the text "watch"', () => {
      const result = postLinkTextHelper({ postType:'Vlog', YouTubeLink:"https://youtubeLink"});
      expect(result).toEqual('watch');
    });
  });
  describe('when the post is of type Vlog and does not have a youtube link', () => {
    it('should return the text "watch"', () => {
      const result = postLinkTextHelper({ postType:'Vlog'});
      expect(result).toEqual('read');
    });
  });
  describe('when the post is of type VideoTutorial and has a youtube link', () => {
    it('should return the text "watch & learn"', () => {
      const result = postLinkTextHelper({ postType:'VideoTutorial', YouTubeLink:"https://youtubeLink"});
      expect(result).toEqual('watch & learn');
    });
  });
  describe('when the post is of type VideoTutorial and does not have a youtube link', () => {
    it('should return the text "watch & learn"', () => {
      const result = postLinkTextHelper({ postType:'VideoTutorial'});
      expect(result).toEqual('read');
    });
  });
  describe('when the post is of type Article', () => {
    it('should return the text "read"', () => {
      const result = postLinkTextHelper({postType:'Article'});
      expect(result).toEqual('read');
    });
  });
  describe('when the post is of type QuickTip', () => {
    it('should return the text "read"', () => {
      const result = postLinkTextHelper({postType:'QuickTip'});
      expect(result).toEqual('read');
    });
  });
});
