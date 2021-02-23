
import styles from "../styles/Home.module.css";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { request, gql } from "graphql-request";

const endpoint = "https://graphqlzero.almansi.me/api";

const getPosts = async () => {
  return await request(
    endpoint,
    gql`
      query {
        posts {
          data {
            id
            title
          }
        }
      }
    `
  )
}

export default function Home({dehydratedState}) {
  
  const { data } = useQuery('posts', getPosts);
  
  return (
    <div className={styles.container}>
      <div>
          {data?.posts?.data?.map(post => (
            <p key={post.id}>
                {post.title}
            </p>
          ))}
        </div>
    </div>
  );


}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
