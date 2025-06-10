import { aboutPage } from "@/db/pages";
import PageView from "@/views/page";

type Props = {};

const OthersPage = (props: Props) => {
  return (
    <>
      <PageView pageData={aboutPage} />
    </>
  );
};

export default OthersPage;
