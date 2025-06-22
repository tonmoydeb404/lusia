import { TCMSMetaSEO } from "./components";

export type TCMSPage = {
  title: string;
  description: string;
  slug: string;
  content?: {
    html: string;
  };
  metaSeo?: TCMSMetaSEO;
  isCustomPage: boolean;
};
