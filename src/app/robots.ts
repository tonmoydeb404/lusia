import envConfig from "@/common/env-config";
import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${envConfig.BASE_URL}/sitemap.xml`,
});

export default robots;
