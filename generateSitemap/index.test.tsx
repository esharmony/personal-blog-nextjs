import { generateSitemapIndex, generateSitemapPosts } from './index';
import { readFileSync, writeFileSync } from 'fs';
import { Path, Domain } from './processWrapper';

jest.mock('fs', () => ({
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock('./processWrapper', () => ({
  Path: jest.fn(),
  Domain: jest.fn(),
}));

describe('generateSitemap', () => {
  describe('when generating sitemap urls for the index page', () => {
    beforeEach(() => {
      (Path as jest.Mock).mockImplementation(() => 'test');
      (Domain as jest.Mock).mockImplementation(() => 'domain');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call to write the file with all values passed place in between thier comments', () => {
      (readFileSync as jest.Mock).mockImplementation(
        () =>
          '<xml><!-- baseurl --> <!-- endbaseurl --> <!-- hplastmod --> <!-- hpendlastmod --> <!-- navigation --> <!-- endnavigation --></xml>'
      );

      generateSitemapIndex('23-03-2012', [
        { Item: 'test', Slug: 'test', updatedAt: '30-12-2001' },
      ]);

      expect(writeFileSync).toHaveBeenCalledWith(
        'test/public/sitemap.xml',
        '<xml><!-- baseurl -->domain<!-- endbaseurl --> <!-- hplastmod -->23-03-2012<!-- hpendlastmod --> <!-- navigation --><url><loc>domain/posts/test</loc><lastmod>30-12-2001</lastmod></url><!-- endnavigation --></xml>',
        'utf8'
      );
    });
  });

  describe('when generating a sitemap urls for the posts', () => {
    beforeEach(() => {
      (Path as jest.Mock).mockImplementation(() => 'test');
      (Domain as jest.Mock).mockImplementation(() => 'domain');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call to write the file with all values passed place in between thier comments', () => {
      (readFileSync as jest.Mock).mockImplementation(
        () => '<xml><!-- posts --> <!-- endposts --></xml>'
      );

      generateSitemapPosts([{ Slug: 'slug', SortDate: '20-02-2001' }]);

      expect(writeFileSync).toHaveBeenCalledWith(
        'test/public/sitemap.xml',
        '<xml><!-- posts --><url><loc>domain/post/slug</loc><lastmod>20-02-2001</lastmod></url><!-- endposts --></xml>',
        'utf8'
      );
    });
  });
});
