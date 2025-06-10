import ProductCard from "@/components/cards/product-card";
import HeaderSection from "@/components/sections/header-section";
import { TPage } from "@/types/page";
import { TProduct } from "@/types/product";

type Props = {
  pageData: TPage;
  data: TProduct[];
};

const ProductsView = (props: Props) => {
  const { data, pageData } = props;
  return (
    <>
      <HeaderSection {...pageData} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default ProductsView;
