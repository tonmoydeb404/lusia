import LabelSection from "@/components/sections/label-section";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideFile } from "lucide-react";
import Image from "next/image";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <section className="container pb-24">
        <Image
          src={"https://media.graphassets.com/Fn8oPxB9Sja74IDWxqtO"}
          alt="Tonmoy Deb"
          width={100}
          height={100}
          className="mb-7 rounded-full"
        />
        <h2 className="text-4xl font-bold mb-2">Hello, I&apos;m Jhon Doe</h2>
        <p className="text-lg mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem,
          veritatis placeat possimus saepe sunt corporis obcaecati vel illo
          voluptatum veniam fugiat numquam eligendi tempore, dolorum asperiores
          ut expedita voluptate?
        </p>
        <div className="flex items-center flex-wrap gap-2">
          <Button className="rounded-full">
            <LucideFile /> View Resume
          </Button>
          <Button className="rounded-full" variant={"outline"}>
            <SiGithub /> Github
          </Button>
        </div>
      </section>

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

export default HomePage;
