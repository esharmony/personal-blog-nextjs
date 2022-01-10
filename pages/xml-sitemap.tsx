import { GetServerSideProps } from 'next';
import React from 'react';
import {
  fetchNavigation,
  NavigationData,
  NavigationItem,
} from '../hooks/useNavigation';
import { fetchPostSlugs, PostsSlugData, PostSlug } from '../hooks/usePosts';

const Sitemap: React.FC = () => null;

const getPosts = (postSlugs: PostSlug[]): string => {
  const urls: string[] = [];
  postSlugs.map((item) => {
    urls.push(
      `<url><loc>${process.env.DOMAIN}/post/${item.Slug}</loc><lastmod>${item.SortDate}</lastmod></url>`
    );
  });
  return urls.join('');
};

const getNavigationItems = (navigationItems: NavigationItem[]) => {
  const navigationUrls: string[] = [];
  navigationItems.map((item) => {
    navigationUrls.push(
      `<url><loc>${process.env.DOMAIN}/posts/${item.Slug}</loc><lastmod>${item.updatedAt}</lastmod></url>`
    );
  });
  return navigationUrls.join('');
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const postsSlugData = (await fetchPostSlugs()) as PostsSlugData;
  const navigationData = (await fetchNavigation()) as NavigationData;

  if (res) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <url><loc>${process.env.DOMAIN}</loc><lastmod>${
      postsSlugData.posts[0].SortDate
    }</lastmod></url>
        ${getNavigationItems(navigationData.navigations)}
        ${getPosts(postsSlugData.posts)}
    </urlset>`);
    res.end();
  }
  return {
    props: {},
  };
};

export default Sitemap;
