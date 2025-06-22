import { TCMSPage } from "@/types/cms/db/page";
import { TCMSProfile } from "@/types/cms/db/profile";
import GithubActivity from "./github-activity";
import HeroSection from "./hero-section";
import PinnedArticle from "./pinned-article";
import RecentActivity from "./recent-activity";
import TechStack from "./tech-stack";

export type Props = {
  page: TCMSPage;
  profile: TCMSProfile;
};

const HomeView = (props: Props) => {
  const { profile } = props;

  return (
    <>
      <HeroSection {...props} />

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <GithubActivity />
        </div>
        <div>
          <RecentActivity product={profile.ongoingProduct} />
        </div>
        <div className="order-1 md:order-0">
          <PinnedArticle />
        </div>
        <div className="md:col-span-2">
          <TechStack stackItems={profile.stackItems} />
        </div>
      </section>
    </>
  );
};

export default HomeView;
