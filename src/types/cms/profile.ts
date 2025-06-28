import { TCMSMedia } from "./common";
import { TCMSLinkComponent } from "./components";
import { TCMSProduct } from "./product";
import { TCMSStackItem } from "./stack";

export type TCMSProfile = {
  name: string;
  avatar: TCMSMedia;
  contacts: TCMSLinkComponent[];
  socials: TCMSLinkComponent[];
  stackItems: TCMSStackItem[];
  ongoingProduct?: TCMSProduct;
  callToActions: TCMSLinkComponent[];
};
