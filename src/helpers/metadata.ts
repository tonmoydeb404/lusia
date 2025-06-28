import { TCMSMetaSEO } from "@/types/cms/components";
import { Metadata } from "next";
import { deepMerge } from "./object";

export const metaSeoToMetadata = (
  metaSeo: TCMSMetaSEO = {},
  metadata: Metadata = {}
): Metadata => {
  return deepMerge<Metadata, Metadata>(metadata, {
    title: metaSeo?.title,
    description: metaSeo?.description,
    alternates: {
      canonical: metaSeo?.canonicalUrl,
    },
    robots: {
      index: metaSeo?.index,
      follow: metaSeo?.follow,
    },
    openGraph: {
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
  });
};
