import LabelSection from "@/components/sections/label-section";
import { LucideLink } from "lucide-react";

type Props = {};

const RecentActivity = (props: Props) => {
  return (
    <LabelSection label="Now Building" wrapperClassname="p-4 grow">
      <h3 className="font-bold mb-1.5 flex items-center gap-x-1">
        Ordito <LucideLink size={14} className="text-primary" />
      </h3>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni,
        obcaecati repellat.
      </p>
    </LabelSection>
  );
};

export default RecentActivity;
