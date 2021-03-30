import fs from 'fs';
import { NavigationItem } from '../hooks/useNavigation';
import {  Post } from '../hooks/usePosts';
import { Path, Domain, NodeEnv } from './processWrapper';


export const generateSitemap = (
  lastestPostSortDate: string,
  navigationItems: NavigationItem[],
  postSlugs: Post[]
): void => {

  const path = `${Path()}/public/sitemap.xml`;

  let sitemap = fs.readFileSync(path).toString();

  const baseUrlRegex = /(?<=<!-- baseurl -->)[\S\s]*?(?=<!-- endbaseurl -->)/m;

  sitemap = sitemap.replace(baseUrlRegex, Domain);

  const baseUrlLastModRegex = /(?<=<!-- hplastmod -->)[\S\s]*?(?=<!-- hpendlastmod -->)/m;

  sitemap = sitemap.replace(baseUrlLastModRegex, lastestPostSortDate);

  const navigationRegex = /(?<=<!-- navigation -->)[\S\s]*?(?=<!-- endnavigation -->)/m;

  const navigationUrls: string[] = [];

  navigationItems.map((item) => {
    navigationUrls.push(
      `<url><loc>${Domain()}/posts/${item.Slug}</loc><lastmod>${item.updatedAt}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(navigationRegex, navigationUrls.join(''));

  const postsRegex = /(?<=<!-- posts -->)[\S\s]*?(?=<!-- endposts -->)/m;

  const postUrls: string[] = [];

  postSlugs.map((item) => {
    postUrls.push(
      `<url><loc>${Domain()}/post/${item.Slug}</loc><lastmod>${item.SortDate}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(postsRegex, postUrls.join(''));

  fs.writeFileSync(path, sitemap, 'utf8');

};