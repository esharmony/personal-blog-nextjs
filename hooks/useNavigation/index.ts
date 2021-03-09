import { request, gql } from 'graphql-request';
import { QueryObserverResult, useQuery } from 'react-query';

const endpoint = 'http://localhost:1337/graphql';

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

export interface NavigationData {
  navigations: NavigationItem[];
}

export interface NavigationItem {
  Item: string;
  Slug: string;
}

const useNavigation = (): QueryObserverResult<NavigationData> => {
  return useQuery('navigation', () => fetchNavigation());
};

export { useNavigation, fetchNavigation };
