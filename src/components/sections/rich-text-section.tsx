type Props = {
  htmlString: string | null;
};

const RichTextSection = (props: Props) => {
  const { htmlString } = props;

  if (htmlString === null) return null;

  return (
    <div className="container">
      <article
        className="prose dark:prose-invert max-w-full"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      ></article>
    </div>
  );
};

export default RichTextSection;
