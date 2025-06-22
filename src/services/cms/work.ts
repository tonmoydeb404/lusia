import { CacheTags } from "@/common/cache";
import { TCMSWork } from "@/types/cms/db/work";
import { cmsRequest } from "../common";
import { fetchWorksQuery } from "./work.query";

type WorksResponse = {
  works: TCMSWork[];
};

export async function fetchWorks() {
  try {
    const data = await cmsRequest<WorksResponse>(fetchWorksQuery, {}, [
      CacheTags.CMS_WORKS,
    ]);
    return data.works;
  } catch (error) {
    console.error("Error fetching works:", error);
    return [];
  }
}
