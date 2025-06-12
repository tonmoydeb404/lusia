import { TCMSMedia } from "./common";

export enum CMSProductPricingTypeEnum {
  "OPEN_SOURCE" = "OPEN_SOURCE",
  "PAID" = "PAID",
  "FREEMIUM" = "FREEMIUM",
}

export type TCMSProduct = {
  id: string;
  title: string;
  description: string;
  logo: TCMSMedia;
  pricingType: CMSProductPricingTypeEnum;
  liveLink: string;
  sourceLink: string;
};
