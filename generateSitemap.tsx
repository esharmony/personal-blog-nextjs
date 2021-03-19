import fs from 'fs';
import { NavigationItem } from './hooks/useNavigation';
import { PostSlug } from './hooks/usePosts';

const path = `${process.cwd()}/public/sitemap.xml`;

export const generateSitemapIndex = (
  lastestPostSortDate: string,
  navigationItems: NavigationItem[]
): void => {
  let sitemap = fs.readFileSync(path).toString();

  const baseUrlRegex = /(?<=<!-- baseurl -->).*(?=<!-- endbaseurl -->)/g;

  sitemap = sitemap.replace(baseUrlRegex, process.env.DOMAIN as string);

  const baseUrlLastModRegex = /(?<=<!-- hplastmod -->).*(?=<!-- hpendlastmod -->)/g;

  sitemap = sitemap.replace(baseUrlLastModRegex, lastestPostSortDate);

  const navigationRegex = /(?<=<!-- navigation -->).*(?=<!-- endnavigation -->)/g;

  const urls: string[] = [];

  navigationItems.map((item) => {
    urls.push(
      `<url><loc>${process.env.DOMAIN}/posts/${item.Slug}</loc><lastmod>${item.updatedAt}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(navigationRegex, urls.join(''));

  fs.writeFileSync(path, sitemap, 'utf8');
};

export const generateSitemapPosts = (postSlugs: PostSlug[]): void => {

  let sitemap = fs.readFileSync(path).toString();

  const urls: string[] = [];

  const regex = /(?<=<!-- posts -->).*(?=<!-- endposts -->)/g;

  postSlugs.map((item) => {
    urls.push(
      `<url><loc>${process.env.DOMAIN}/post/${item.Slug}</loc><lastmod>${item.SortDate}</lastmod></url>`
    );
  });

  sitemap = sitemap.replace(regex, urls.join(''));

  fs.writeFileSync(path, sitemap, 'utf8');

};
