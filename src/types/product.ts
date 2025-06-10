import { TMedia } from "./common";

export type TProduct = {
  id: string;
  title: string;
  description: string;
  logo: TMedia;
  type: "open-source" | "paid" | "freemium";
  liveLink: string;
  sourceLink: string;
  techStack: string[];
  slug: string;
  content?: {
    html: string;
  };
};
