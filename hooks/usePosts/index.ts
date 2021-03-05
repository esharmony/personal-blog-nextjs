import { request, gql } from 'graphql-request';
import { QueryObserverResult, useQuery } from 'react-query';
import { PostType } from '../../components/Post/postTypeIndicator';

const endpoint = 'http://localhost:1337/graphql';

const fetchPosts = async (limit: number): Promise<PostsData> => {
  return await request(
    endpoint,
    gql`
      query {
        posts(sort:"SortDate:desc", limit:${limit}) {
          Tags
          Title
          SubTitle
          id
          Slug
          MetaTitle
          MetaDescription
          YouTubeLink
          CoverImage {
            url
          }
          ShortBody
          Body
          PostType
          Comments {
            Comment,
            Name
          }
        }
      }
    `
  );
};

export interface PostsData {
  posts: Post[];
}

interface CoverImage {
  url: string;
}

interface Comment {
  Comment: string;
  Name: string;
}

export interface Post {
  Title: string;
  SubTitle: string;
  id: string;
  PostType: PostType;
  Body: string;
  Slug: string;
  IsPostPreview?: boolean;
  ShortBody: string;
  MetaTitle: string;
  MetaDescription: string;
  Comments: Comment[];
  CoverImage: CoverImage;
  Tags: string[];
  YouTubeLink: string;
}

const usePosts = (): QueryObserverResult<PostsData> => {
  return useQuery(['posts', 20], () => fetchPosts(20));
};

export { usePosts, fetchPosts };
