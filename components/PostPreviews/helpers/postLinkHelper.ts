import { Post } from '../../../hooks/usePosts';

const PostLinkHelper = (post:Post): string => {
    if(post.PostType === 'VideoTutorial' || post.PostType === 'Vlog'){
        if(post.YouTubeLink !== ""){
            return post.YouTubeLink;
        }
        else {
            console.warn(`There maybe a missing video link for ${post.Slug}`)
            return `/post/${post.Slug}`;
        }
    }
    else {
        return `/post/${post.Slug}`;
    }
}

export default PostLinkHelper;