import { request, gql } from "graphql-request";
import { QueryObserverResult, useQuery } from "react-query";
import { PostType } from "../../components/Post/postTypeIndicator";

const endpoint = "http://localhost:1337/graphql";

const fetchPosts = async (limit: number): Promise<PostsData> => {
  return await request(
    endpoint,
    gql`
      query {
        posts(sort:"SortDate:desc", limit:${limit}) {
            id
            Title
            PostType
        }
      }
    `
  );
};

export interface PostsData {
  posts: Post[];
}

export interface Post {
  Title: string;
  id: string;
  PostType: PostType;
}

const usePosts = (): QueryObserverResult<PostsData> => {
  return useQuery(["posts", 20], () => fetchPosts(20));
};

export { usePosts, fetchPosts };
