import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generateContactPageSchema,
  generatePageBreadcrumb,
  generateWebPageSchema,
} from "@/helpers/schema-org";
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

      <Script
        id="schema-page-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(pageRes)),
        }}
      />
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateContactPageSchema(pageRes)),
        }}
      />
      <Script
        id={"schema-breadcrumb-contact"}
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

export default ContactPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("contact");

  return metaSeoToMetadata(pageRes);
};
