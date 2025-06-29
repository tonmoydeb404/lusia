import { metaSeoToMetadata } from "@/helpers/metadata";
import { generateWebPageSchema } from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import { fetchPosts } from "@/services/hashnode/post";
import BlogView from "@/views/blog";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const BlogPage = async (props: Props) => {
  const postsRes = await fetchPosts();
  const pageRes = await fetchPage("blog");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <BlogView pageData={pageRes} postsData={postsRes} />
      {pageRes && (
        <Script
          id="schema-page-blog"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema(pageRes)),
          }}
        />
      )}
    </>
  );
};

export default BlogPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("blog");

  return metaSeoToMetadata(pageRes);
};
