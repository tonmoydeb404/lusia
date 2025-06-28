import { metaSeoToMetadata } from "@/helpers/metadata";
import { fetchPage } from "@/services/cms/page";
import ContactView from "@/views/contact";
import { notFound } from "next/navigation";

type Props = {};

const ContactPage = async (props: Props) => {
  const pageRes = await fetchPage("contact");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <ContactView page={pageRes} />
    </>
  );
};

export default ContactPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("contact");

  return metaSeoToMetadata(pageRes?.metaSeo, {
    openGraph: { type: "website" },
  });
};
