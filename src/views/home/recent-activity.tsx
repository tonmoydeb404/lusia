import LabelSection from "@/components/sections/label-section";
import {
  generateProductSchema,
  generateSoftwareApplicationSchema,
} from "@/helpers/schema-org";
import { TCMSProduct } from "@/types/cms/product";
import Link from "next/link";
import Script from "next/script";

type Props = {
  product: TCMSProduct | undefined;
};

const RecentActivity = (props: Props) => {
  const { product } = props;

  return (
    <LabelSection
      label="Now Building"
      wrapperClassname="p-4 grow"
      className="min-h-full"
    >
      {product ? (
        <>
          <h3 className="font-bold mb-1.5 flex items-center gap-x-1">
            {product.liveLink || product.sourceLink ? (
              <Link
                href={product.liveLink || product.sourceLink}
                className="hover:underline decoration-wavy decoration-primary"
              >
                {product.title}
              </Link>
            ) : (
              product.title
            )}
          </h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>

          <Script
            id={"schema-ongoing-product-" + product.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateProductSchema(product)),
            }}
          />

          <Script
            id={"schema-ongoing-software-" + product.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateSoftwareApplicationSchema(product)
              ),
            }}
          />
        </>
      ) : (
        <>
          <h3 className="font-bold mb-1.5 flex items-center gap-x-1">
            Stay Tuned!
          </h3>
          <p className="text-sm text-muted-foreground">
            No product in progress right now. Something exciting will come soon.
          </p>
        </>
      )}
    </LabelSection>
  );
};

export default RecentActivity;
