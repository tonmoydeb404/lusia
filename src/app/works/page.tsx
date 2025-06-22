import { fetchPage } from "@/services/cms/page";
import WorksView from "@/views/works";
import { notFound } from "next/navigation";

type Props = {};

const WorksPage = async (props: Props) => {
  const pageRes = await fetchPage("works");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <WorksView page={pageRes} />
    </>
  );
};

export default WorksPage;
