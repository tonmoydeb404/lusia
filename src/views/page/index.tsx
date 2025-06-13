import HeaderSection from "@/components/sections/header-section";
import { TCMSPage } from "@/types/cms/db/page";

type Props = {
  pageData: TCMSPage;
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
