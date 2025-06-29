import { metaSeoToMetadata } from "@/helpers/metadata";
import { generateWebPageSchema } from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import { fetchStacks } from "@/services/cms/stack";
import StacksView from "@/views/stacks";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const StacksPage = async (props: Props) => {
  const pageRes = await fetchPage("stacks");
  const stacksRes = await fetchStacks();

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <StacksView page={pageRes} stacks={stacksRes} />
      {pageRes && (
        <Script
          id="schema-page-stacks"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema(pageRes)),
          }}
        />
      )}
    </>
  );
};

export default StacksPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("stacks");

  return metaSeoToMetadata(pageRes);
};
