import NotFoundView from "@/views/not-found";
import { Metadata } from "next";

type Props = {};

const NotFoundPage = (props: Props) => {
  return <NotFoundView />;
};

export default NotFoundPage;

// ----------------------------------------------------------------------

export const generateMetadata = (): Metadata => {
  return {
    title: "Not Found",
    description: "Requested page not found",
  };
};
