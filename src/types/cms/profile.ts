import { TCMSMedia } from "./common";
import { TCMSLinkComponent } from "./components";

export type TCMSProfile = {
  name: string;
  avatar: TCMSMedia;
  contacts: TCMSLinkComponent[];
  socials: TCMSLinkComponent[];
};
