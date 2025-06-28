import LabelSection from "@/components/sections/label-section";
import { TCMSProduct } from "@/types/cms/db/product";
import Link from "next/link";

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
