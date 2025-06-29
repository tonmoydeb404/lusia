import { metaSeoToMetadata } from "@/helpers/metadata";
import { generateWebPageSchema } from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import WorksView from "@/views/works";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const WorksPage = async (props: Props) => {
  const pageRes = await fetchPage("works");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <WorksView pageData={pageRes} />
      {pageRes && (
        <Script
          id="schema-page-works"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema(pageRes)),
          }}
        />
      )}
    </>
  );
};

export default WorksPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("works");

  return metaSeoToMetadata(pageRes);
};
