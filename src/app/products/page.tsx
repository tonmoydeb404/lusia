import { metaSeoToMetadata } from "@/helpers/metadata";
import {
  generatePageBreadcrumb,
  generateWebPageSchema,
} from "@/helpers/schema-org";
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

      <Script
        id="schema-page-products"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageSchema(pageRes)),
        }}
      />
      <Script
        id={"schema-breadcrumb-products"}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generatePageBreadcrumb(pageRes.title, pageRes.slug)
          ),
        }}
      />
    </>
  );
};

export default ProductsPage;

// ----------------------------------------------------------------------

export const generateMetadata = async () => {
  const pageRes = await fetchPage("products");

  return metaSeoToMetadata(pageRes);
};
