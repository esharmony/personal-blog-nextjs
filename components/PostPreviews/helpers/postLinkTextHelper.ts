import { PostType } from '../../Post/postTypeIndicator';

export interface PostlinkTextHelperProps {
  postType: PostType;
  YouTubeLink?: string;
} 

const PostLinkTextHelper = ({postType, YouTubeLink}: PostlinkTextHelperProps): string => {
  if(postType === 'Tutorial'){
    return 'learn';
  }
  else if(postType === 'VideoTutorial' && YouTubeLink){
    return 'watch & learn';
  }
  else if(postType === 'Vlog' && YouTubeLink){
    return 'watch';
  }
  return 'read';
};

export default PostLinkTextHelper;
