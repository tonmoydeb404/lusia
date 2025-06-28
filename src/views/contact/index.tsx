import { getIcon } from "@/common/icons";
import HeaderSection from "@/components/sections/header-section";
import LabelSection from "@/components/sections/label-section";
import { Badge } from "@/components/ui/badge";
import { fetchProfile } from "@/services/cms/profile";
import { TCMSPage } from "@/types/cms/page";
import Link from "next/link";
import ContactForm from "./contact-form";

type Props = {
  page: TCMSPage;
};

const ContactView = async (props: Props) => {
  const { page } = props;
  const profileRes = await fetchProfile();

  return (
    <>
      <HeaderSection title={page.title} description={page.description}>
        <div className="flex items-center flex-wrap gap-1.5 mt-3">
          {profileRes?.socials.map((item) => {
            const Icon = getIcon(item.ref);

            return (
              <Badge
                key={item.href}
                asChild
                variant={"secondary"}
                className="text-sm [&_svg]:!size-4"
              >
                <Link
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  title={item.title}
                >
                  <Icon />
                  {item.title}
                </Link>
              </Badge>
            );
          })}
        </div>
      </HeaderSection>
      <div className="container">
        <LabelSection label="Get In touch">
          <ContactForm
            email={
              profileRes?.contacts?.find((item) => item.ref === "email")
                ?.href ?? null
            }
          />
        </LabelSection>
      </div>
    </>
  );
};

export default ContactView;
