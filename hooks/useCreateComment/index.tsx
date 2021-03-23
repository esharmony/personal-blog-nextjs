import { useMutation } from 'react-query';
import { Comment } from '../usePosts';
import { GraphQLClient, gql } from 'graphql-request';

interface UseCreateCommentProps {
  Name: string;
  Comment: String;
  CommentIdentity: String;
}

const updateComment = async ({
  Name,
  Comment,
  CommentIdentity,
}: UseCreateCommentProps): Promise<Comment | Error> => {
  const mutation = gql`
    mutation CreateComment {
      createComment(
        input: {
          data: {
            Name: "${Name}"
            Comment: "${Comment}"
            CommentIdentity: "${CommentIdentity}"
          }
        }
      ) {
        comment {
          Name
          Comment
          CommentIdentity
        }
      }
    }
`;

  var graphQLClient = new GraphQLClient(
    (process.env.APIURL as string) || 'http://localhost:4000/graphql'
  );
  return await graphQLClient.request(mutation);
};

export const useCreateComment = () => {
  const { mutateAsync, isLoading, isError, isSuccess, isIdle } = useMutation(
    updateComment
  );
  return { mutateAsync, isLoading, isError, isSuccess, isIdle };
};
