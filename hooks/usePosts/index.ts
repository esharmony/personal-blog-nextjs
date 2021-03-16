import { request, gql } from 'graphql-request';
import { QueryObserverResult, useQuery } from 'react-query';
import { PostType } from '../../components/Post/postTypeIndicator';


const endpoint = 'http://localhost:1337/graphql';



interface CoverImage {
  url: string;
}

export interface Comment {
  Comment: string;
  Name: string;
  id: string;
}

interface NavigationItem {
  Item:string;
  MetaTitle:string;
  MetaDescription:string;
}

export interface Post {
  Title: string;
  SubTitle: string;
  id: string;
  PostType: PostType;
  Body: string;
  Slug: string;
  navigation_item: NavigationItem;
  IsPostPreview?: boolean;
  ShortBody: string;
  MetaTitle: string;
  MetaDescription: string;
  Comments: Comment[];
  CoverImage: CoverImage;
  Tags: string[];
  YouTubeLink: string;
}

export interface PostSlug {
  Slug: string;
}

export interface PostsData {
  posts: Post[];
}

export interface PostsSlugData {
  posts: PostSlug[];
}

const fetchPosts = async (): Promise<PostsData> => {
  return await request(
    endpoint,
    gql`
      query Posts {
        posts(sort:"SortDate:desc") {
          Title
          SubTitle
          id
          Slug
          YouTubeLink
          CoverImage {
            url
          }
          ShortBody
          PostType
        }
      }
    `
  );
};

const fetchFilteredPosts = async (slug: string): Promise<PostsData> => {
  return await request(
    endpoint,
    gql`
      query FilteredPosts {
        posts(sort:"SortDate:desc", where:{navigation_item:{Slug:"${slug}"}}) {
          Title
          SubTitle
          id
          Slug
          YouTubeLink
          navigation_item {
            Slug
            Item
            MetaTitle
            MetaDescription
          }
          CoverImage {
            url
          }
          ShortBody
          PostType
        }
      }
    `
  );
};

const fetchPost = async (slug: string): Promise<PostsData> => {
  return await request(
    endpoint,
    gql`
      query Post {
        posts(where : {Slug: "${slug}"}) {
          Tags
          Title
          SubTitle
          id
          Slug
          MetaTitle
          MetaDescription
          CoverImage {
            url
          }
          Body
          PostType
          Comments {
            Comment
            Name
            id
          }
        }
      }
    `
  );
};

const fetchPostSlugs = async (): Promise<PostsSlugData> => {
  return await request(
    endpoint,
    gql`
      query Posts {
        posts {
          Slug
        }
      }
    `
  );
};

const usePosts = (): QueryObserverResult<PostsData> => {
  return useQuery('posts', () => fetchPosts());
};

const useFilteredPosts = (slug: string): QueryObserverResult<PostsData> => {
  return useQuery(['filteredPosts', slug], () => fetchFilteredPosts(slug));
};

const usePost = (slug: string): QueryObserverResult<PostsData> => {
  return useQuery(['post', slug], () => fetchPost(slug))
}

export { usePosts, fetchPosts, fetchPostSlugs, fetchPost, usePost, fetchFilteredPosts, useFilteredPosts };
