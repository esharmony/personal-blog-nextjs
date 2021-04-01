import { fetchPosts } from '..';
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

  describe('when fetching posts', () => {
    it('returns posts', async () => {
      server.use(
        graphql.query('Posts', (req, res, ctx) => {
          return res(
            ctx.data({
              posts: [{ slug: 'slug', id:'id', title:'title' }],
            })
          );
        })
      );

      let result;

      await act(async () => {
        result = await fetchPosts();
      });

      expect(result).toEqual({ posts: [{ slug: 'slug', id:'id', title:'title' }] });
    });
  });
});
