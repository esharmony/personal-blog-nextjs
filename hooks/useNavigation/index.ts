import { request, gql } from 'graphql-request';
import { QueryObserverResult, useQuery } from 'react-query';

export interface NavigationData {
  navigations: NavigationItem[];
}

export interface NavigationItem {
  Item: string;
  Slug: string;
  updatedAt?: string;
}

export interface NavigationSlug {
  Slug: string;
}

const fetchNavigation = async (): Promise<NavigationData> => {
  return await request(
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query Navigation {
        navigations {
          Item
          Slug
          updatedAt
        }
      }
    `
  );
};

const fetchNavigationSlugs = async (): Promise<NavigationData> => {
  return await request(
    process.env.APIURL as string || 'http://localhost:1337/graphql',
    gql`
      query NavigationSlugs {
        navigations {
          Slug
        }
      }
    `
  );
};

const useNavigation = (): QueryObserverResult<NavigationData> => {
  return useQuery('navigation', () => fetchNavigation());
};

export { useNavigation, fetchNavigation, fetchNavigationSlugs };
