import { TMedia } from "./common";

export type TStackItem = {
  id: string;
  title: string;
  description: string;
  icon: TMedia;
};

export type TStack = {
  id: string;
  title: string;
  items: TStackItem[];
};
