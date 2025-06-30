import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generatePersonSchema,
  generateProfilePageSchema,
  generateWebSiteSchema,
} from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import { fetchProfile } from "@/services/cms/profile";
import HomeView from "@/views/home";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const HomePage = async (props: Props) => {
  const pageRes = await fetchPage("home");
  const profileRes = await fetchProfile();

  if (!profileRes || !pageRes) {
    notFound();
  }

  return (
    <>
      <HomeView page={pageRes} profile={profileRes} />

      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema(profileRes, pageRes)),
        }}
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema(profileRes, pageRes)),
        }}
      />
      <Script
        id="schema-profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateProfilePageSchema(profileRes, pageRes)
          ),
        }}
      />
    </>
  );
};

export default HomePage;

// ----------------------------------------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const pageRes = await fetchPage("home");

  return metaSeoToMetadata(pageRes);
};
