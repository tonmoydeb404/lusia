import { fetchPage } from "@/services/cms/page";
import { fetchPosts } from "@/services/hashnode/post";
import BlogView from "@/views/blog";
import { notFound } from "next/navigation";

type Props = {};

const BlogPage = async (props: Props) => {
  const postsRes = await fetchPosts();
  const pageRes = await fetchPage("blog");

  if (!pageRes) {
    notFound();
  }

  return <BlogView pageData={pageRes} postsData={postsRes} />;
};

export default BlogPage;
