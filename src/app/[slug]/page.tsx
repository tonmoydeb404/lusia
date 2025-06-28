import { metaSeoToMetadata } from "@/helpers/metadata";
import { fetchPage, fetchPages } from "@/services/cms/page";
import PageView from "@/views/page";
import { notFound } from "next/navigation";

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

  return metaSeoToMetadata(pageRes?.metaSeo, {
    openGraph: { type: "website" },
  });
};
