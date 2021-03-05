import { PostType } from '../../Post/postTypeIndicator';

const PostLinkTextHelper = (postType: PostType): string => {
  switch (postType) {
    case 'Tutorial':
      return 'learn';
    case 'VideoTutorial':
      return 'watch & learn';
    case 'Vlog':
      return 'watch';
    default: return "read";
  }
};

export default PostLinkTextHelper;
