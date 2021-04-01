import { fetchFilteredPosts } from '..';
import { graphql } from 'msw';
import { server } from '../../../mocks/server';
import { act } from 'react-dom/test-utils';

describe('fetchPost', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  describe('when fetching filtered posts by slug', () => {
    it('returns filtered posts' , async () => {
      server.use(
        graphql.query('FilteredPosts', (req, res, ctx) => {
          return res(
            ctx.data({
              posts: [{ slug: 'slug', id:'id', title:'title' }],
            })
          );
        })
      );

      let result;

      await act(async () => {
        result = await fetchFilteredPosts('slug');
      });

      expect(result).toEqual({ posts: [{ slug: 'slug', id:'id', title:'title' }] });
    });
  });
});
