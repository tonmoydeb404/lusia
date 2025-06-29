import { TCMSLinkComponent } from "@/types/cms/components";
import { TCMSPage } from "@/types/cms/page";
import { TCMSProduct } from "@/types/cms/product";

export type SearchItemType = "link" | "page" | "product";

export type SearchItem = {
  type: SearchItemType;
  title: string;
  description: string | null;
  href: string;
  newTab: boolean;
};

export interface SearchProps {
  links: TCMSLinkComponent[];
  products: TCMSProduct[];
  pages: TCMSPage[];
}
