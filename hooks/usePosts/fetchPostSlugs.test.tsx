import { fetchPostSlugs } from '.';
import { graphql } from 'msw';
import { server } from '../../mocks/server';
import { act } from 'react-dom/test-utils';

describe('fetchPostSlugs', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  describe('when fetching post slugs', () => {
    it('returns slugs with react query', async () => {
      server.use(
        graphql.query('PostSlugs', (req, res, ctx) => {
          return res(
            ctx.data({
              posts: [{ slug: 'slug' }],
            })
          );
        })
      );

      let result;

      await act(async () => {
        result = await fetchPostSlugs();
      });

      expect(result).toEqual({ posts: [{ slug: 'slug' }] });
    });
  });
});
