import { TCMSMedia } from "./common";

export enum CMSStackItemLevelEnum {
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
  "EXPERT",
}

export type TCMSStackItem = {
  id: string;
  title: string;
  description: string;
  icon: TCMSMedia;
  level: CMSStackItemLevelEnum | null;
};

export type TCMSStack = {
  id: string;
  title: string;
  items: TCMSStackItem[];
};
