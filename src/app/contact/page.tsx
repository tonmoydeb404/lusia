import { metaSeoToMetadata } from "@/helpers/metadata";
import { generateWebPageSchema } from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import ContactView from "@/views/contact";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const ContactPage = async (props: Props) => {
  const pageRes = await fetchPage("contact");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <ContactView page={pageRes} />
      {pageRes && (
        <Script
          id="schema-page-contact"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema(pageRes)),
          }}
        />
      )}
    </>
  );
};

export default ContactPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("contact");

  return metaSeoToMetadata(pageRes);
};
