import { fetchNavigationSlugs } from '.';
import { graphql } from 'msw';
import { server } from '../../mocks/server';
import { act } from 'react-dom/test-utils';

describe('fetchNavigationSlugs', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  describe('when fetching navigation slugs', () => {
    it('returns slugs with react query', async () => {
      server.use(
        graphql.query('NavigationSlugs', (req, res, ctx) => {
          return res(
            ctx.data({
              navigations: [{ slug: 'slug' }],
            })
          );
        })
      );

      let result;

      await act(async () => {
        result = await fetchNavigationSlugs();
      });

      expect(result).toEqual({ navigations: [{ slug: 'slug' }] });
    });
  });
});
