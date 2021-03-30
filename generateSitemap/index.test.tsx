import { generateSitemap } from './index';
import { writeFileSync } from 'fs';
import { Path, Domain, NodeEnv } from './processWrapper';
import { Post } from '../hooks/usePosts';

jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

jest.mock('./processWrapper', () => ({
  Domain: jest.fn(),
}));

const posts = [
  {
    Tags: ['cool post', 'ideas'],
    IsPostPreview: false,
    Title: 'Blog post 1',
    id: '1',
    SubTitle: 'The first post',
    Slug: 'First-Post',
    MetaTitle: 'Strapi tutorial',
    MetaDescription: 'First post about my blog',
    CoverImage: {
      url:
        'https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg',
    },
    ShortBody: 'Here is my first post about my blog, its  a good post',
    Body:
      'Here is my first post about my blog \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ultrices urna, vestibulum laoreet diam. Quisque laoreet pretium nisl, non ultricies lacus laoreet id. Duis interdum purus nisl, sed dictum elit bibendum quis. In aliquam ex vitae urna sodales, quis sagittis dui viverra. Vestibulum mattis ligula odio, ut eleifend tortor sagittis sit amet. Vivamus vestibulum sem et suscipit interdum. Vestibulum non facilisis velit. Mauris eget vehicula diam. Etiam a laoreet ex, laoreet condimentum leo. Aliquam a tristique sem. Nam quis quam ut nulla porta dignissim ac sed lorem. Suspendisse dictum nisi quam, ut elementum orci consectetur a.\n\n![cover.jpg](https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg)\n\nAliquam non arcu a nulla aliquam fermentum. Quisque tortor lorem, pellentesque fringilla dolor suscipit, ultricies feugiat erat. Morbi eget eros et turpis blandit tempor. Nunc sit amet pulvinar tellus. Aenean lacinia vulputate arcu a venenatis. Proin vitae faucibus ante. Donec lobortis consectetur hendrerit. Donec ornare a diam non tempus. Sed eros elit, volutpat eget varius ac, imperdiet id tortor. Etiam ut molestie justo. Donec pulvinar interdum purus sit amet elementum. Vestibulum consectetur et dui ac ullamcorper.\n\n```\nPellentesque bibendum enim id enim feugiat, ut lobortis elit lobortis. Sed ornare feugiat posuere. \nCras vehicula efficitur dignissim. Vestibulum malesuada gravida neque, sit amet ultricies eros mollis sed. \nPellentesque sit amet nisl in neque pretium vestibulum lacinia sit amet augue.\n\n```\n\nDonec maximus elit eu convallis varius. In maximus in orci eu dapibus. Curabitur sed rutrum mauris. Nam sagittis ipsum at libero tincidunt, non sagittis nisl placerat. Aenean efficitur vitae augue vel sollicitudin. Etiam eget mauris rhoncus, blandit leo eu, porta augue. Curabitur porta at ipsum at scelerisque. Vivamus porta tellus est, id elementum tortor semper id.',
    PostType: 'VideoTutorial',
    Comments: [
      {
        Comment: 'Here is my comment for number 2',
        Name: 'matt',
        id: '1',
      },
      {
        Comment: 'Here is another comment for 1',
        Name: 'matt',
        id: '2',
      },
    ],
    YouTubeLink: '',
    SortDate: '20-02-2001',
    navigation_item: {},
  },
] as Post[];

describe('generateSitemap', () => {
  describe('when generating sitemap urls for the index page in development', () => {
    beforeEach(() => {
      (Domain as jest.Mock).mockImplementation(() => 'domain');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call to write the file with all values passed place in between thier comments', () => {
      generateSitemap(
        '23-03-2012',
        [{ Item: 'test', Slug: 'test', updatedAt: '30-12-2001' }],
        posts
      );

      expect(writeFileSync).toHaveBeenCalledWith(
        'public/sitemap.xml',
        '<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"><url><loc><!-- baseurl -->domain<!-- endbaseurl --> </loc><lastmod><!-- hplastmod -->23-03-2012<!-- hpendlastmod --> </lastmod></url><!-- navigation --><url><loc>domain/posts/test</loc><lastmod>30-12-2001</lastmod></url><!-- endnavigation --><!-- posts --><url><loc>domain/post/First-Post</loc><lastmod>20-02-2001</lastmod></url><!-- endposts --></urlset>',
        'utf8'
      );
    });
  });
});
