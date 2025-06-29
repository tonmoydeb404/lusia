import WorkCard from "@/components/cards/work-card";
import HeaderSection from "@/components/sections/header-section";
import RichTextSection from "@/components/sections/rich-text-section";
import { fetchWorks } from "@/services/cms/work";
import { TCMSPage } from "@/types/cms/page";

type Props = {
  pageData: TCMSPage;
};

const WorksView = async (props: Props) => {
  const { pageData } = props;
  const worksRes = await fetchWorks();

  return (
    <>
      <HeaderSection
        description={pageData.description}
        title={pageData.title}
      />

      <section className="container mb-16">
        {worksRes.map((item) => (
          <WorkCard data={item} key={item.id} />
        ))}
      </section>
      <RichTextSection htmlString={pageData?.content?.html ?? null} />
    </>
  );
};

export default WorksView;
