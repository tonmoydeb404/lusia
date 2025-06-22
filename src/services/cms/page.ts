import { CacheTags } from "@/common/cache";
import { TCMSPage } from "@/types/cms/db/page";
import { cmsRequest } from "../common";
import { fetchPageQuery, fetchPagesQuery } from "./page.query";

type PagesResponse = {
  pages: TCMSPage[];
};

export async function fetchPages() {
  try {
    const data = await cmsRequest<PagesResponse>(fetchPagesQuery, {}, [
      CacheTags.CMS_PAGES,
    ]);
    return data.pages;
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

type PageResponse = {
  page: TCMSPage | null;
};

export async function fetchPage(slug: string) {
  try {
    const data = await cmsRequest<PageResponse>(fetchPageQuery, { slug }, [
      `${CacheTags.CMS_PAGES}-${slug}`,
    ]);
    return data.page;
  } catch (error) {
    console.error(`Error fetching page(${slug}):`, error);
    return null;
  }
}
