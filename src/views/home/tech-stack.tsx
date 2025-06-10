/* eslint-disable @next/next/no-img-element */
import LabelSection from "@/components/sections/label-section";
import { stacks } from "@/db/stacks";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <LabelSection
      label="Tech Stack"
      wrapperClassname="p-4 flex items-center flex-wrap gap-2"
    >
      {[
        ...stacks[0].items,
        ...stacks[1].items,
        ...stacks[2].items,
        ...stacks[3].items,
      ].map((item) => (
        <div key={item.id} className="p-2 border rounded-lg">
          <img
            src={item.icon.url}
            alt={item.icon.alt || item.title}
            width={30}
          />
        </div>
      ))}
    </LabelSection>
  );
};

export default TechStack;
