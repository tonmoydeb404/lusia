export type TCMSLinkComponent = {
  title: string;
  href: string;
  newTab: boolean;
  ref: string | null;
};

export type TCMSMetaSEO = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  index?: boolean;
  follow?: boolean;
};
