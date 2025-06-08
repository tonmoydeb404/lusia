type Props = {};

const data = [
  {
    company: "HypoMatrix",
    position: "Sr. Software Engineer",
    startDate: "2021",
    endDate: null,
  },
];

const WorksPage = (props: Props) => {
  return (
    <>
      <section className="container mb-16">
        <h2 className="text-3xl font-bold mb-2">Works</h2>
        <h3 className="text-lg">
          Companies & client&apos;s I&apos;ve worked with
        </h3>
      </section>

      <section className="container mb-16">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <h4 className="text-base font-medium">{item.position},</h4>
            <h5 className="text-muted-foreground">{item.company}</h5>
            <div className="flex-1 border-b border-dashed mx-2" />
            <span className="text-sm text-muted-foreground">
              {item.startDate} - {item.endDate ?? "Present"}
            </span>
          </div>
        ))}
      </section>

      <article className="container max-w-(--breakpoint-lg) prose dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          explicabo, eligendi unde adipisci aliquid magni incidunt maxime
          aperiam deserunt, sapiente quaerat nostrum! Quaerat id perferendis
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          explicabo, eligendi unde adipisci aliquid magni incidunt maxime
          aperiam deserunt, sapiente quaerat nostrum! Quaerat id perferendis
          error architecto similique soluta nostrum aliquid repellendus odit. Ea
          alias fugit, explicabo cumque enim iusto magnam praesentium doloribus.
          Saepe, suscipit? Quisquam eius dolor at minus.
        </p>
      </article>
    </>
  );
};

export default WorksPage;
