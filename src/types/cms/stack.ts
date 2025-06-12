import { TCMSMedia } from "./common";

export enum CMSStackSkillLevelEnum {
  "BEGINNER" = "BEGINNER",
  "INTERMEDIATE" = "INTERMEDIATE",
  "ADVANCED" = "ADVANCED",
  "EXPERT" = "EXPERT",
}

export type TCMSStackItem = {
  id: string;
  title: string;
  description: string;
  icon: TCMSMedia;
  skillLevel: CMSStackSkillLevelEnum | null;
};

export type TCMSStack = {
  id: string;
  title: string;
  items: TCMSStackItem[];
};
