import { CacheTags } from "@/common/cache";
import envConfig from "@/common/env-config";
import { THNPost } from "@/types/hashnode/db/post.type";
import { hashnodeRequest } from "../common";
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
    const data = await hashnodeRequest<PublicationResponse>(
      fetchPostsQuery,
      { host: envConfig.HASHNODE_URL },
      [CacheTags.HN_POSTS]
    );
    return data.publication?.posts?.edges.map((edge) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
