import { THNPost } from "@/types/hashnode/db/post.type";
import { graphqlRequest } from "../common";
import { fetchPostsQuery } from "./post.query";

type PublicationResponse = {
  publication: {
    id: string;
    posts: {
      edges: { node: THNPost }[];
    };
  };
};

export async function fetchHashnodePosts() {
  try {
    const data = await graphqlRequest<PublicationResponse>(
      fetchPostsQuery,
      {
        host: process.env.NEXT_PUBLIC_HASHNODE_URL,
      },
      "https://gql.hashnode.com/",
      ["HN_POSTS"]
    );
    return data.publication?.posts?.edges.map((edge) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
