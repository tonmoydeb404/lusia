import HeaderSection from "@/components/sections/header-section";
import { TPage } from "@/types/page";

type Props = {
  pageData: TPage;
};

const PageView = (props: Props) => {
  const { pageData } = props;
  return (
    <>
      <HeaderSection
        title={pageData.title}
        description={pageData.description}
      />
      {pageData.content && (
        <article
          className="container max-w-(--breakpoint-lg) prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: pageData.content.html }}
        />
      )}
    </>
  );
};

export default PageView;
