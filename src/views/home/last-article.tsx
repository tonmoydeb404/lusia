import LabelSection from "@/components/sections/label-section";

type Props = {};

const LastArticle = (props: Props) => {
  return (
    <LabelSection label="Last Article" wrapperClassname="p-4">
      <h3 className="font-bold mb-1.5 flex items-center gap-x-1">
        Design Sense for Developers
      </h3>
      <p className="text-sm text-muted-foreground">
        Learn why developers need design sense and how it enhances their work in
        startups, freelancing, or front-end roles
      </p>
    </LabelSection>
  );
};

export default LastArticle;
