import { CacheTags } from "@/common/cache";
import { TCMSStack } from "@/types/cms/db/stack";
import { cmsRequest } from "../common";
import { fetchStacksQuery } from "./stack.query";

type StacksResponse = {
  stacks: TCMSStack[];
};

export async function fetchStacks() {
  try {
    const data = await cmsRequest<StacksResponse>(fetchStacksQuery, {}, [
      CacheTags.CMS_STACKS,
    ]);
    return data.stacks;
  } catch (error) {
    console.error("Error fetching stacks:", error);
    return [];
  }
}
