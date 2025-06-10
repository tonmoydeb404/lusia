import GithubActivity from "./github-activity";
import HeroSection, { HeroSectionProps } from "./hero-section";
import LastArticle from "./last-article";
import RecentActivity from "./recent-activity";
import TechStack from "./tech-stack";

type Props = {} & HeroSectionProps;

const HomeView = (props: Props) => {
  return (
    <>
      <HeroSection {...props} />

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <GithubActivity />
        </div>
        <div>
          <RecentActivity />
        </div>
        <div>
          <LastArticle />
        </div>
        <div className="md:col-span-2">
          <TechStack />
        </div>
      </section>
    </>
  );
};

export default HomeView;
