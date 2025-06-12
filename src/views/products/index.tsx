import ProductCard from "@/components/cards/product-card";
import HeaderSection from "@/components/sections/header-section";
import { TCMSPage } from "@/types/cms/page";
import { TCMSProduct } from "@/types/cms/product";

type Props = {
  pageData: TCMSPage;
  data: TCMSProduct[];
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
