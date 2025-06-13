import { TCMSMedia } from "./common";
import { TCMSLinkComponent } from "./components";
import { TCMSProduct } from "./product";
import { TCMSStack } from "./stack";

export type TCMSProfile = {
  name: string;
  avatar: TCMSMedia;
  contacts: TCMSLinkComponent[];
  socials: TCMSLinkComponent[];
  featuredStacks: TCMSStack[];
  ongoingProduct?: TCMSProduct;
};
