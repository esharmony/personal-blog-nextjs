import { renderHook } from '@testing-library/react-hooks';
import { useCreateComment } from '.';
import { graphql } from 'msw';
import { server } from '../../mocks/server';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-dom/test-utils';

describe('useCreateComment', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  describe('when succesfully creating a comment', () => {
    it('posts and returns succesfull with react-query', async () => {
      const queryClientOne = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      });

      const wrapper = ({ children }: any) => (
        <QueryClientProvider client={queryClientOne}>
          {children}
        </QueryClientProvider>
      );

      const comment = {
        Comment: 'Here is another comment for 1',
        Name: 'matt',
        id: '2',
      };

      server.use(
        graphql.mutation('CreateComment', (req, res, ctx) => {
          // When authenticated, respond with a query payload
          return res(
            ctx.data({
              comment: comment,
            })
          );
        })
      );

      const { result, waitFor } = renderHook(() => useCreateComment(), {
        wrapper,
      });

      act(() => {
        result.current.mutateAsync({
          Name: comment.Name,
          Comment: comment.Comment,
          CommentIdentity: comment.id,
        });
      })

      expect(result.current.isLoading).toBe(false); // false

      await waitFor(() => {
        return result.current.isSuccess;
      });
    });
  });
});
