import { fetchNavigation } from '..';
import { graphql } from 'msw';
import { server } from '../../../mocks/server';
import { act } from 'react-dom/test-utils';

describe('fetchNavigation', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  describe('when fetching navigation', () => {
    it('returns navigation items', async () => {
      server.use(
        graphql.query('Navigation', (req, res, ctx) => {
          return res(
            ctx.data({
              navigations: [{ slug: 'slug' , item: 'item', updatedAt: 'date' }],
            })
          );
        })
      );

      let result;

      await act(async () => {
        result = await fetchNavigation();
      });

      expect(result).toEqual({ navigations: [{ slug: 'slug' , item: 'item', updatedAt: 'date' }]});
    });
  });
});
