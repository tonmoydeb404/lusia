import WorkCard from "@/components/cards/work-card";
import HeaderSection from "@/components/sections/header-section";
import RichTextSection from "@/components/sections/rich-text-section";
import { fetchWorks } from "@/services/cms/work";
import { TCMSPage } from "@/types/cms/db/page";

type Props = {
  page: TCMSPage;
};

const WorksView = async (props: Props) => {
  const { page } = props;
  const worksRes = await fetchWorks();

  return (
    <>
      <HeaderSection description={page.description} title={page.title} />

      <section className="container mb-16">
        {worksRes.map((item) => (
          <WorkCard data={item} key={item.id} />
        ))}
      </section>
      {page.content?.html && <RichTextSection htmlString={page.content.html} />}
    </>
  );
};

export default WorksView;
