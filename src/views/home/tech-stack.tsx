import LabelSection from "@/components/sections/label-section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TCMSStackItem } from "@/types/cms/stack";
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
      glowingEffect
    >
      <TooltipProvider>
        <div className="flex items-center flex-wrap gap-2">
          {stackItems.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger className="flex size-12 grow sm:grow-0 items-center justify-center border rounded-lg hover:shadow dark:hover:border-foreground/30 duration-300 transition-all">
                <Image
                  src={item.logo.url}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.title}</p>
                {/* <TooltipArrow /> */}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </LabelSection>
  );
};

export default TechStack;
