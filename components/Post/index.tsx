import { Post as IPost}  from '../../hooks/usePosts';
import PostTypeIndicator from '../Post/postTypeIndicator';

const Post = (post: IPost):JSX.Element => {

    return (
        <div className="w-96 mx-auto bg-gray-100 m-20">
            <div className="h-10 flex items-center border-red-800 border-2">
                <div className="pt-6 lg:p-4 text-center lg:text-left space-y-4">
                    <p className="text-xl font-light m-6">{post.Title}</p>
                    <PostTypeIndicator PostType={post.PostType} />
                </div>
            </div>
        </div>
    )
}

export default Post;