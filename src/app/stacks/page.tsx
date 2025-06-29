import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generatePageBreadcrumb,
  generateWebPageSchema,
} from "@/helpers/schema-org";
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

      <Script
        id="schema-page-stacks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(pageRes)),
        }}
      />
      <Script
        id={"schema-breadcrumb-stacks"}
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

export default StacksPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("stacks");

  return metaSeoToMetadata(pageRes);
};
