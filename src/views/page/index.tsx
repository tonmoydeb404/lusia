import HeaderSection from "@/components/sections/header-section";
import RichTextSection from "@/components/sections/rich-text-section";
import { TCMSPage } from "@/types/cms/page";

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
      <RichTextSection htmlString={pageData?.content?.html ?? null} />
    </>
  );
};

export default PageView;
