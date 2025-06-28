export type TCMSMedia = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export enum TCMSContentType {
  PAGE = "Page",
  PRODUCT = "Product",
  PROFILE = "Profile",
  STACK = "Stack",
  WORK = "Work",
}
