import fs from 'fs';
import { NavigationItem } from '../hooks/useNavigation';
import { PostSlug } from '../hooks/usePosts';
import { Path, Domain } from './processWrapper';


export const generateSitemapIndex = (
  lastestPostSortDate: string,
  navigationItems: NavigationItem[]
): void => {
  const path = `${Path()}/public/sitemap.xml`;
  let sitemap = fs.readFileSync(path).toString();

  const baseUrlRegex = /(?<=<!-- baseurl -->).*(?=<!-- endbaseurl -->)/g;

  sitemap = sitemap.replace(baseUrlRegex, Domain);

  const baseUrlLastModRegex = /(?<=<!-- hplastmod -->).*(?=<!-- hpendlastmod -->)/g;

  sitemap = sitemap.replace(baseUrlLastModRegex, lastestPostSortDate);

  const navigationRegex = /(?<=<!-- navigation -->).*(?=<!-- endnavigation -->)/g;

  const urls: string[] = [];

  navigationItems.map((item) => {
    urls.push(
      `<url><loc>${Domain}/posts/${item.Slug}</loc><lastmod>${item.updatedAt}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(navigationRegex, urls.join(''));

  fs.writeFileSync(path, sitemap, 'utf8');
};

export const generateSitemapPosts = (postSlugs: PostSlug[]): void => {

  const path = `${Path()}/public/sitemap.xml`;

  let sitemap = fs.readFileSync(path).toString();

  const urls: string[] = [];

  const regex = /(?<=<!-- posts -->).*(?=<!-- endposts -->)/g;

  postSlugs.map((item) => {
    urls.push(
      `<url><loc>${Domain}/post/${item.Slug}</loc><lastmod>${item.SortDate}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(regex, urls.join(''));

  fs.writeFileSync(path, sitemap, 'utf8');

};
