import { metaSeoToMetadata } from "@/helpers/metadata";
import { fetchPage } from "@/services/cms/page";
import ProductsView from "@/views/products";
import { notFound } from "next/navigation";

type Props = {};

const ProductsPage = async (props: Props) => {
  const pageRes = await fetchPage("products");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <ProductsView pageData={pageRes} />
    </>
  );
};

export default ProductsPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("products");

  return metaSeoToMetadata(pageRes);
};
