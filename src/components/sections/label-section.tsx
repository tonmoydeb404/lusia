import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { GlowingEffect } from "../ui/glowing-effect";

type Props = {
  label: string;
  children: ReactNode;
  wrapperClassname?: string;
  glowingEffect?: boolean;
} & React.JSX.IntrinsicElements["section"];

const LabelSection = (props: Props) => {
  const { children, label, wrapperClassname, glowingEffect, ...others } = props;
  return (
    <section
      {...others}
      className={cn(
        "p-4 bg-secondary rounded-2xl flex flex-col border relative",
        others.className,
      )}
    >
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={80}
        glow={true}
        disabled={!glowingEffect}
        proximity={64}
        inactiveZone={0.01}
      />
      <h2 className="mb-3 text-muted-foreground text-sm font-heading">
        {label}
      </h2>
      <div className={cn("bg-background rounded-2xl", wrapperClassname)}>
        {children}
      </div>
    </section>
  );
};

export default LabelSection;
