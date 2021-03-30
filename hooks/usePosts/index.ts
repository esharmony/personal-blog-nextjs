import { request, gql } from 'graphql-request';
import { PostType } from '../../components/Post/postTypeIndicator';

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
  SortDate: string;
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
  SortDate:string;
}

export interface PostsData {
  posts: Post[];
}

export interface PostsSlugData {
  posts: PostSlug[];
}

const fetchPosts = async (): Promise<PostsData> => {
  return await request(
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query Posts {
        posts(sort:"SortDate:desc") {
          Title
          SubTitle
          id
          Slug
          SortDate
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
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query FilteredPosts {
        posts(sort:"SortDate:desc", where:{navigation_item:{Slug:"${slug}"}}) {
          Title
          SubTitle
          id
          Slug
          SortDate
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
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query Post {
        posts(where : {Slug: "${slug}"}) {
          Tags
          Title
          SubTitle
          id
          Slug
          SortDate
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
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query PostSlugs {
        posts(sort:"SortDate:desc") {
          SortDate
          Slug
        }
      }
    `
  );
};

export { fetchPosts, fetchPostSlugs, fetchPost, fetchFilteredPosts };
