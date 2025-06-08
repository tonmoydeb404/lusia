import LabelSection from "@/components/sections/label-section";
import GithubActivity from "./github-activity";
import HeroSection, { HeroSectionProps } from "./hero-section";

type Props = {} & HeroSectionProps;

const HomeView = (props: Props) => {
  return (
    <>
      <HeroSection {...props} />

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <LabelSection label="Github Activity" className="md:col-span-2">
          <div className="p-4">
            <GithubActivity />
          </div>
        </LabelSection>
        <LabelSection label="Latest Update">
          <></>
        </LabelSection>
        <LabelSection label="Now Playing">
          <></>
        </LabelSection>
        <LabelSection label="Tech Stack" className="md:col-span-2">
          <></>
        </LabelSection>
      </section>
    </>
  );
};

export default HomeView;
