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
