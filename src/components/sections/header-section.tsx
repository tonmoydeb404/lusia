type Props = {
  title: string;
  description: string;
};

const HeaderSection = (props: Props) => {
  const { title, description } = props;
  return (
    <section className="container mb-16">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <h3 className="text-lg">{description}</h3>
    </section>
  );
};

export default HeaderSection;
