import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generatePageBreadcrumb,
  generateWebPageSchema,
} from "@/helpers/schema-org";
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

      <Script
        id="schema-page-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(pageRes)),
        }}
      />
      <Script
        id={"schema-breadcrumb-blog"}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generatePageBreadcrumb(pageRes.title, pageRes.slug)
          ),
        }}
      />
    </>
  );
};

export default BlogPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("blog");

  return metaSeoToMetadata(pageRes);
};
