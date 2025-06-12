import { CMSProductPricingTypeEnum, TCMSProduct } from "@/types/cms/product";

const products: TCMSProduct[] = [
  {
    id: "1",
    title: "Dyno Blk",
    description:
      "A developer tool to generate clean HTML UI blocks via AI prompts.",
    logo: {
      url: "https://github.com/tonmoydeb404/ordito/raw/main/public/logo.svg",
      alt: "Dyno Blk Logo",
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "https://dyno-blk.vercel.app",
    sourceLink: "https://github.com/tonmoydeb/dyno-blk",
  },
  {
    id: "2",
    title: "HLS Video Server",
    description:
      "A self-hosted adaptive bitrate streaming system built with Node.js and FFmpeg.",
    logo: {
      url: "https://github.com/tonmoydeb404/ordito/raw/main/public/logo.svg",
      alt: "HLS Server Logo",
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "http://localhost:3000", // Localhost for dev tools
    sourceLink: "https://github.com/tonmoydeb/hls-server",
  },
  {
    id: "3",
    title: "QuickPod",
    description:
      "Turn your blog posts into podcast-style audio using TTS APIs.",
    logo: {
      url: "https://github.com/tonmoydeb404/ordito/raw/main/public/logo.svg",
      alt: "QuickPod Logo",
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "https://quickpod.ai",
    sourceLink: "https://github.com/tonmoydeb/quickpod",
  },
  {
    id: "4",
    title: "Webcam FX",
    description:
      "An advanced webcam configuration extension with zoom, overlay, and mirror support.",
    logo: {
      url: "https://github.com/tonmoydeb404/cam-tuner/raw/main/public/icons/icon128.png",
      alt: "Webcam FX Logo",
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "chrome-extension://webcam-fx",
    sourceLink: "https://github.com/tonmoydeb/webcam-fx",
  },
  {
    id: "5",
    title: "SchemaSync",
    description:
      "A GitHub-integrated DB schema designer with branching and project linking.",
    logo: {
      url: "https://github.com/tonmoydeb404/tailexpense/raw/main/public/brand/logo-mini.svg",
      alt: "SchemaSync Logo",
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "https://schemasync.io",
    sourceLink: "https://github.com/tonmoydeb/schemasync",
  },
];

export default products;
