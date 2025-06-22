import { blogPage } from "@/db/pages";
import { fetchPosts } from "@/services/hashnode/post";
import BlogView from "@/views/blog";

type Props = {};

const BlogPage = async (props: Props) => {
  const postsRes = await fetchPosts();

  return <BlogView pageData={blogPage} postsData={postsRes} />;
};

export default BlogPage;
