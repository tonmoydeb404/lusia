import envConfig from "@/common/env-config";
import { fetchPages } from "@/services/cms/page";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const pagesRes = await fetchPages();
  const pagesSitemap: MetadataRoute.Sitemap = pagesRes.map((page) => ({
    url:
      page.slug === "home"
        ? `${envConfig.BASE_URL}`
        : `${envConfig.BASE_URL}/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: "daily",
  }));

  return [...pagesSitemap];
};

export default sitemap;
