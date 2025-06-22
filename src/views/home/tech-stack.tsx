import LabelSection from "@/components/sections/label-section";
import { TCMSStackItem } from "@/types/cms/db/stack";
import Image from "next/image";

type Props = {
  stackItems: TCMSStackItem[];
};

const TechStack = (props: Props) => {
  const { stackItems } = props;

  return (
    <LabelSection
      label="Tech Stack"
      className="min-h-full"
      wrapperClassname="p-4 grow"
    >
      <div className="flex items-center flex-wrap gap-2">
        {stackItems.map((item) => (
          <div key={item.id} className="p-2 border rounded-lg">
            <Image
              src={item.logo.url}
              alt={item.title}
              width={30}
              height={30}
            />
          </div>
        ))}
      </div>
    </LabelSection>
  );
};

export default TechStack;
