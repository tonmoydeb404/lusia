import { productsPage } from "@/db/pages";
import products from "@/db/products";
import ProductsView from "@/views/products";

type Props = {};

const ProductsPage = (props: Props) => {
  return (
    <>
      <ProductsView data={products} pageData={productsPage} />
    </>
  );
};

export default ProductsPage;
