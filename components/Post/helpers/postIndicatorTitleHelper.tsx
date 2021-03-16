import { PostType } from '../postTypeIndicator';

const PostIndicatorTitleHelper = (postType: PostType): string => {
    switch(postType) {
        case "VideoTutorial":
            return "Video Tutorial";
        case "QuickTip":
            return "Quick Tip";
        default: return postType
    }
} 

export default PostIndicatorTitleHelper;