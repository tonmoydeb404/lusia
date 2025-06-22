import { homePage } from "@/db/pages";
import { fetchProfile } from "@/services/cms/profile";
import HomeView from "@/views/home";
import { notFound } from "next/navigation";

type Props = {};

const HomePage = async (props: Props) => {
  const profileRes = await fetchProfile();

  if (!profileRes) {
    notFound();
  }

  return (
    <>
      <HomeView page={homePage} profile={profileRes} />
    </>
  );
};

export default HomePage;
