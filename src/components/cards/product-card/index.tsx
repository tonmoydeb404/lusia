import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CMSProductPricingTypeEnum, TCMSProduct } from "@/types/cms/db/product";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGitBranch } from "react-icons/lu";

type Props = {
  product: TCMSProduct;
};

const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <article
      key={product.id}
      className="flex flex-col items-start p-4 border rounded-2xl hover:shadow-md duration-200 cursor-pointer relative group overflow-hidden"
    >
      <div className="p-2 bg-accent rounded-2xl mb-4">
        <Image
          src={product.logo.url}
          alt={product.logo?.alt || product.title}
          width={60}
          height={60}
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center flex-wrap mb-1">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <Badge className="ml-2" variant={"secondary"}>
          {pricingTypeLabel[product.pricingType]}
        </Badge>
      </div>
      <p className="text-muted-foreground">{product.description}</p>

      <div className="flex items-center absolute right-5 top-5 gap-2 duration-300 md:-translate-y-[60px] group-hover:translate-y-0">
        {product.liveLink && (
          <Button size={"icon"} variant={"secondary"} asChild>
            <Link href={product.liveLink} target="_blank">
              <LuExternalLink />
            </Link>
          </Button>
        )}
        {product.sourceLink && (
          <Button size={"icon"} variant={"outline"} asChild>
            <Link href={product.sourceLink} target="_blank">
              <LuGitBranch />
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

const pricingTypeLabel = {
  [CMSProductPricingTypeEnum.FREEMIUM]: "Fremium",
  [CMSProductPricingTypeEnum.OPEN_SOURCE]: "Open-Source",
  [CMSProductPricingTypeEnum.PAID]: "Paid",
};
