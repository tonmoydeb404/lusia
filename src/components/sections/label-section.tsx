import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
} & React.JSX.IntrinsicElements["section"];

const LabelSection = (props: Props) => {
  const { children, label, ...others } = props;
  return (
    <section
      {...others}
      className={cn("p-4 bg-secondary rounded-2xl", others.className)}
    >
      <h2 className="mb-3 text-muted-foreground text-sm">{label}</h2>
      <div className="bg-background min-h-52 rounded-2xl">{children}</div>
    </section>
  );
};

export default LabelSection;
