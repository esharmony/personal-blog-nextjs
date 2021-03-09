import PostLinkHelper from '../postLinkHelper';
import { Post } from '../../../../hooks/usePosts';
const post = {
  Tags: ['cool post', 'ideas'],
  IsPostPreview: false,
  Title: 'Strapi tutorial',
  id: '1',
  SubTitle: 'Part one - back end',
  Slug: 'First-Post',
  MetaTitle: 'First post',
  MetaDescription: 'First post about my blog',
  CoverImage: {
    url:
      'https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg',
  },
  ShortBody:
    'Here is my first post about my blog \n\n**Lorem ipsum dolor** sit amet, [consectetur](https://bbc.co.uk) adipiscing elit.\n',
  Body:
    'Here is my first post about my blog \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ultrices urna, vestibulum laoreet diam. Quisque laoreet pretium nisl, non ultricies lacus laoreet id. Duis interdum purus nisl, sed dictum elit bibendum quis. In aliquam ex vitae urna sodales, quis sagittis dui viverra. Vestibulum mattis ligula odio, ut eleifend tortor sagittis sit amet. Vivamus vestibulum sem et suscipit interdum. Vestibulum non facilisis velit. Mauris eget vehicula diam. Etiam a laoreet ex, laoreet condimentum leo. Aliquam a tristique sem. Nam quis quam ut nulla porta dignissim ac sed lorem. Suspendisse dictum nisi quam, ut elementum orci consectetur a.\n\n![cover.jpg](https://res.cloudinary.com/sabbatical-dev-blog/image/upload/v1613663579/Joseph_Mallord_William_Turner_Norham_Castle_Sunrise_WGA_23182_98a348be81.jpg)\n\nAliquam non arcu a nulla aliquam fermentum. Quisque tortor lorem, pellentesque fringilla dolor suscipit, ultricies feugiat erat. Morbi eget eros et turpis blandit tempor. Nunc sit amet pulvinar tellus. Aenean lacinia vulputate arcu a venenatis. Proin vitae faucibus ante. Donec lobortis consectetur hendrerit. Donec ornare a diam non tempus. Sed eros elit, volutpat eget varius ac, imperdiet id tortor. Etiam ut molestie justo. Donec pulvinar interdum purus sit amet elementum. Vestibulum consectetur et dui ac ullamcorper.\n\n```\nPellentesque bibendum enim id enim feugiat, ut lobortis elit lobortis. Sed ornare feugiat posuere. \nCras vehicula efficitur dignissim. Vestibulum malesuada gravida neque, sit amet ultricies eros mollis sed. \nPellentesque sit amet nisl in neque pretium vestibulum lacinia sit amet augue.\n\n```\n\nDonec maximus elit eu convallis varius. In maximus in orci eu dapibus. Curabitur sed rutrum mauris. Nam sagittis ipsum at libero tincidunt, non sagittis nisl placerat. Aenean efficitur vitae augue vel sollicitudin. Etiam eget mauris rhoncus, blandit leo eu, porta augue. Curabitur porta at ipsum at scelerisque. Vivamus porta tellus est, id elementum tortor semper id.',
  Comments: [
    {
      Comment: 'Here is my comment for number 2',
      Name: 'matt',
    },
    {
      Comment: 'Here is another comment for 1',
      Name: 'matt',
    },
  ],
};

const YouTubeLink = 'youtubelink';
const Slug = 'slug';

describe('post link helper', () => {
  describe('when the post type is of vlog and there is a youtube link', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink,
      PostType: 'Vlog',
    });
    it('should return the youtube link', () => {
      expect(result).toEqual(YouTubeLink);
    });
  });

  describe('when the post type is of vlog and the youtube link is empty', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink: '',
      Slug,
      PostType: 'Vlog',
    });
    it('should return the slug prepended with the post page slug', () => {
      expect(result).toEqual(`post/${Slug}`);
    });
  });

  describe('when the post type is of video tutorial', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink,
      PostType: 'VideoTutorial',
    });
    it('should return the youtube link', () => {
      expect(result).toEqual(YouTubeLink);
    });
  });

  describe('when the post type is of video tutoral and the youtube link is empty', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink: '',
      Slug,
      PostType: 'VideoTutorial',
    });
    it('should return the slug prepended with the post page slug', () => {
      expect(result).toEqual(`post/${Slug}`);
    });
  });
  describe('when the post type is of article', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink: '',
      Slug,
      PostType: 'Article',
    });
    it('should return the slug prepended with the post page slug', () => {
      expect(result).toEqual(`post/${Slug}`);
    });
  });

  describe('when the post type is of tutorial', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink: '',
      Slug,
      PostType: 'Tutorial',
    });
    it('should return the slug prepended with the post page slug', () => {
      expect(result).toEqual(`post/${Slug}`);
    });
  });

  describe('when the post type is of quick tip', () => {
    const result = PostLinkHelper({
      ...(post as Post),
      YouTubeLink: '',
      Slug,
      PostType: 'QuickTip',
    });
    it('should return the slug prepended with the post page slug', () => {
      expect(result).toEqual(`post/${Slug}`);
    });
  });
});
