import ProductCard from "@/components/cards/product-card";
import HeaderSection from "@/components/sections/header-section";
import { fetchProducts } from "@/services/cms/product";
import { TCMSPage } from "@/types/cms/db/page";

type Props = {
  pageData: TCMSPage;
};

const ProductsView = async (props: Props) => {
  const { pageData } = props;
  const productsRes = await fetchProducts();
  return (
    <>
      <HeaderSection {...pageData} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        {productsRes.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default ProductsView;
