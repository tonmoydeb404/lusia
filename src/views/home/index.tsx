import LabelSection from "@/components/sections/label-section";
import HeroSection, { HeroSectionProps } from "./hero-section";

type Props = {} & HeroSectionProps;

const HomeView = (props: Props) => {
  return (
    <>
      <HeroSection {...props} />

      <section className="container grid grid-cols-3 gap-5">
        <LabelSection label="Github Activity" className="col-span-2">
          <></>
        </LabelSection>
        <LabelSection label="Latest Update">
          <></>
        </LabelSection>
        <LabelSection label="Now Playing">
          <></>
        </LabelSection>
        <LabelSection label="Tech Stack" className="col-span-2">
          <></>
        </LabelSection>
      </section>
    </>
  );
};

export default HomeView;
