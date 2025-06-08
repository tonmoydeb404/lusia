import { Button } from "@/components/ui/button";
import { PageType } from "@/types/page";
import { ProfileType } from "@/types/profile";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideFile } from "lucide-react";
import Image from "next/image";

export type HeroSectionProps = {
  page: PageType;
  profile: ProfileType;
};

const HeroSection = (props: HeroSectionProps) => {
  const { page, profile } = props;

  return (
    <section className="container pb-24">
      {profile.avatar && (
        <Image
          src={profile.avatar.url}
          alt={profile.avatar.alt}
          width={100}
          height={100}
          className="mb-7 rounded-full"
        />
      )}
      <h2 className="text-4xl font-bold mb-2">{page.title}</h2>
      <p className="text-lg mb-10">{page.description}</p>
      <div className="flex items-center flex-wrap gap-2">
        <Button className="rounded-full">
          <LucideFile /> View Resume
        </Button>
        <Button className="rounded-full" variant={"outline"}>
          <SiGithub /> Github
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
