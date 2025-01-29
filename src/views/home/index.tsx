import HeroSection, { HeroSectionProps } from "./hero-section";

type Props = {} & HeroSectionProps;

const HomeView = (props: Props) => {
  return (
    <>
      <HeroSection {...props} />
    </>
  );
};

export default HomeView;
