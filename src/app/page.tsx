import { metaSeoToMetadata } from "@/helpers/metadata";
import { fetchPage } from "@/services/cms/page";
import { fetchProfile } from "@/services/cms/profile";
import HomeView from "@/views/home";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
    </>
  );
};

export default HomePage;

// ----------------------------------------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const pageRes = await fetchPage("home");

  return metaSeoToMetadata(pageRes?.metaSeo, {
    openGraph: { type: "website" },
  });
};
