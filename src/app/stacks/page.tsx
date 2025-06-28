import { metaSeoToMetadata } from "@/helpers/metadata";
import { fetchPage } from "@/services/cms/page";
import StacksView from "@/views/stacks";
import { notFound } from "next/navigation";

type Props = {};

const StacksPage = async (props: Props) => {
  const pageRes = await fetchPage("stacks");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <StacksView page={pageRes} />
    </>
  );
};

export default StacksPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("stacks");

  return metaSeoToMetadata(pageRes?.metaSeo, {
    openGraph: { type: "website" },
  });
};
