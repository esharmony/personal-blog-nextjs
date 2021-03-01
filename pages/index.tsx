import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchPosts, usePosts, Post as IPost } from "../hooks/usePosts";
import { GetStaticProps } from "next";
import Post from '../components/Post';

export default function Home(): JSX.Element {
  const { data } = usePosts();

  return (
    <div>
      <div>
        {data?.posts.map((post: IPost) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 20], () => fetchPosts(20));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
