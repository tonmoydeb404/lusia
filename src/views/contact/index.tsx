import HeaderSection from "@/components/sections/header-section";
import LabelSection from "@/components/sections/label-section";
import ContactForm from "./contact-form";

type Props = {};

const ContactView = (props: Props) => {
  return (
    <>
      <HeaderSection
        title="Contact Me"
        description="Let me know what's on your mind and I'll get back to you as soon as possible."
      />
      <div className="container">
        <LabelSection label="Get In touch">
          <ContactForm />
        </LabelSection>
      </div>
    </>
  );
};

export default ContactView;
