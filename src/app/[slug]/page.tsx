import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generateAboutPageSchema,
  generatePageBreadcrumb,
  generateWebPageSchema,
} from "@/helpers/schema-org";
import { fetchPage, fetchPages } from "@/services/cms/page";
import PageView from "@/views/page";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

const OthersPage = async (props: Props) => {
  const { slug } = await props.params;
  const pageRes = await fetchPage(slug);

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <PageView pageData={pageRes} />

      <Script
        id={"schema-page-" + slug}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(pageRes)),
        }}
      />
      {slug === "about" && (
        <Script
          id={"schema-about"}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAboutPageSchema(pageRes)),
          }}
        />
      )}
      <Script
        id={"schema-breadcrumb-" + slug}
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

export default OthersPage;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const pages = await fetchPages();

  return pages
    .filter((page) => !page.isCustomPage)
    .map((page) => ({
      slug: page.slug,
    }));
}

// ----------------------------------------------------------------------

export const generateMetadata = async (props: Props) => {
  const { slug } = await props.params;
  const pageRes = await fetchPage(slug);

  return metaSeoToMetadata(pageRes);
};
