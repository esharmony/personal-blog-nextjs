import { request, gql } from 'graphql-request';
import { QueryObserverResult, useQuery } from 'react-query';

const endpoint = 'http://localhost:1337/graphql';

export interface NavigationData {
  navigations: NavigationItem[];
}

export interface NavigationItem {
  Item: string;
  Slug: string;
}

export interface NavigationSlug {
  Slug: string;
}

export interface NavigationSlugData {
  navigationSlugs: NavigationSlug[];
}

const fetchNavigation = async (): Promise<NavigationData> => {
  return await request(
    endpoint,
    gql`
      query Navigation {
        navigations {
          Item
          Slug
        }
      }
    `
  );
};

const fetchNavigationSlugs = async (): Promise<NavigationData> => {
  return await request(
    endpoint,
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
