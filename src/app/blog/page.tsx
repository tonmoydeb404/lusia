import { blogPage } from "@/db/pages";
import { fetchHashnodePosts } from "@/services/hashnode/post";
import BlogView from "@/views/blog";

type Props = {};

const BlogPage = async (props: Props) => {
  const postsRes = await fetchHashnodePosts();

  return <BlogView pageData={blogPage} postsData={postsRes} />;
};

export default BlogPage;
