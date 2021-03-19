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
}: UseCreateCommentProps): Promise<Comment> => {
  const mutation = gql`
    mutation {
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

  try {
    var graphQLClient = new GraphQLClient(process.env.APIURL as string);
    return await graphQLClient.request(mutation);
  } catch (err) {
    throw Error(err.message);
  }
};

export const useCreateComment = () => {
  const { mutateAsync, isLoading, isError, isSuccess, isIdle } = useMutation(
    updateComment
  );
  return { mutateAsync, isLoading, isError, isSuccess, isIdle };
};
