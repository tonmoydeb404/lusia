import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

const HeaderSection = (props: Props) => {
  const { title, description, children } = props;
  return (
    <section className="container mb-16">
      <h1 className="text-3xl font-bold mb-2 font-heading">{title}</h1>
      <h2 className="text-lg text-muted-foreground">{description}</h2>
      {children}
    </section>
  );
};

export default HeaderSection;
