/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { TCMSProduct } from "@/types/cms/product";

type Props = {
  product: TCMSProduct;
};

const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <article
      key={product.id}
      className="flex flex-col items-start p-4 border rounded-2xl hover:shadow-md duration-200 cursor-pointer"
    >
      <div className="p-2 bg-accent rounded-2xl mb-4">
        <img
          src={product.logo.url}
          alt={product.logo?.alt || product.title}
          width={60}
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center flex-wrap mb-1">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <Badge className="ml-2" variant={"secondary"}>
          {product.pricingType}
        </Badge>
      </div>
      <p className="text-muted-foreground">{product.description}</p>
    </article>
  );
};

export default ProductCard;
