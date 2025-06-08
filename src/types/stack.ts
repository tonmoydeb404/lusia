import { MediaType } from "./common";

export type TStackItem = {
  id: string;
  title: string;
  description: string;
  icon: MediaType;
};

export type TStack = {
  id: string;
  title: string;
  items: TStackItem[];
};
