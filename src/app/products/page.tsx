import { metaSeoToMetadata } from "@/helpers/metadata";
import { generateWebPageSchema } from "@/helpers/schema-org";
import { fetchPage } from "@/services/cms/page";
import ProductsView from "@/views/products";
import { notFound } from "next/navigation";
import Script from "next/script";

type Props = {};

const ProductsPage = async (props: Props) => {
  const pageRes = await fetchPage("products");

  if (!pageRes) {
    notFound();
  }

  return (
    <>
      <ProductsView pageData={pageRes} />
      {pageRes && (
        <Script
          id="schema-page-products"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema(pageRes)),
          }}
        />
      )}
    </>
  );
};

export default ProductsPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("products");

  return metaSeoToMetadata(pageRes);
};
