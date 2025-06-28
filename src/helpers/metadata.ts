import envConfig from "@/common/env-config";
import { TCMSPage } from "@/types/cms/page";
import { Metadata } from "next";
import { deepMerge } from "./object";

export const metaSeoToMetadata = (
  page: TCMSPage | null,
  metadata: Metadata = {}
): Metadata => {
  if (!page) return {};

  const { metaSeo, slug } = page;

  const url =
    slug === "home" ? envConfig.BASE_URL : `${envConfig.BASE_URL}/${slug}`;

  return deepMerge<Metadata, Metadata>(
    {
      title: metaSeo?.title,
      description: metaSeo?.description,
      alternates: {
        canonical: metaSeo?.canonicalUrl ?? url,
      },
      robots: {
        index: metaSeo?.index,
        follow: metaSeo?.follow,
      },
      openGraph: {
        title: metaSeo?.title,
        description: metaSeo?.description,
        type: "website",
        url,
        images: metaSeo?.image
          ? {
              url: metaSeo.image.url,
              width: metaSeo.image.width,
              height: metaSeo.image.height,
            }
          : undefined,
      },
      twitter: {
        title: metaSeo?.title,
        description: metaSeo?.description,
        images: metaSeo?.image
          ? {
              url: metaSeo.image.url,
              width: metaSeo.image.width,
              height: metaSeo.image.height,
            }
          : undefined,
      },
    },
    metadata
  );
};
