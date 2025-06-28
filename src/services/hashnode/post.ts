import { CacheTags } from "@/common/cache";
import envConfig from "@/common/env-config";
import { THNPost } from "@/types/hashnode/db/post.type";
import { hashnodeRequest } from "../common";
import { fetchPostPinnedQuery, fetchPostsQuery } from "./post.query";

type PublicationResponse = {
  publication: {
    id: string;
    posts: {
      edges: { node: THNPost }[];
    };
  };
};

export async function fetchPosts() {
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

type PinnedPostResponse = {
  publication: {
    id: string;
    pinnedPost: THNPost | null;
  };
};

export async function fetchPostPinned() {
  try {
    const data = await hashnodeRequest<PinnedPostResponse>(
      fetchPostPinnedQuery,
      { host: envConfig.HASHNODE_URL },
      [CacheTags.HN_PINNED]
    );
    return data.publication.pinnedPost;
  } catch (error) {
    console.error("Error fetching post pinned:", error);
    return null;
  }
}
