import { PostsData } from '../hooks/usePosts';

const IsValidData = (data?: PostsData): boolean => {
  return !!data && data?.posts && data.posts.length > 0 || false;
};

export default IsValidData;
