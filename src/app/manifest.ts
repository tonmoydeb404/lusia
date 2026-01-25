import { fetchProfile } from "@/services/cms/profile";
import { MetadataRoute } from "next";

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const profile = await fetchProfile();

  return {
    name: profile?.name,
    short_name: profile?.name,
    description: profile?.position,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
};

export default manifest;
