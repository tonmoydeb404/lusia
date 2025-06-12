import { TCMSMedia } from "./common";

export enum CMSProductPricingTypeEnum {
  "OPEN_SOURCE",
  "PAID",
  "FREEMIUM",
}

export type TCMSProduct = {
  id: string;
  title: string;
  description: string;
  slug: string;
  logo: TCMSMedia;
  pricingType: CMSProductPricingTypeEnum;
  liveLink: string;
  sourceLink: string;
};
