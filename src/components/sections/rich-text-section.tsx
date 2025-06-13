type Props = {
  htmlString: string;
};

const RichTextSection = (props: Props) => {
  return (
    <article
      className="container max-w-(--breakpoint-lg) prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: props.htmlString }}
    ></article>
  );
};

export default RichTextSection;
