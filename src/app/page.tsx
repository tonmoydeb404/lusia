import { homePage } from "@/db/pages";
import { profile } from "@/db/profile";
import HomeView from "@/views/home";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <HomeView page={homePage} profile={profile} />
    </>
  );
};

export default HomePage;
