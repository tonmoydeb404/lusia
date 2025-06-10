import { TProduct } from "@/types/product";

const products: TProduct[] = [
  {
    id: "1",
    title: "Dyno Blk",
    description:
      "A developer tool to generate clean HTML UI blocks via AI prompts.",
    logo: {
      url: "https://github.com/tonmoydeb404/ordito/raw/main/public/logo.svg",
      alt: "Dyno Blk Logo",
    },
    type: "freemium",
    liveLink: "https://dyno-blk.vercel.app",
    sourceLink: "https://github.com/tonmoydeb/dyno-blk",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI", "Vercel"],
    slug: "dyno-blk",
    content: {
      html: "<p>Dyno Blk helps developers generate clean HTML UI blocks using AI. It offers copy-paste-ready components for rapid prototyping.</p>",
    },
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
    type: "open-source",
    liveLink: "http://localhost:3000", // Localhost for dev tools
    sourceLink: "https://github.com/tonmoydeb/hls-server",
    techStack: ["NestJS", "PostgreSQL", "BullMQ", "FFmpeg", "Docker"],
    slug: "hls-video-server",
    content: {
      html: "<p>Upload, transcode, and stream videos with adaptive bitrate support using HLS. Supports job queue for efficient processing.</p>",
    },
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
    type: "freemium",
    liveLink: "https://quickpod.ai",
    sourceLink: "https://github.com/tonmoydeb/quickpod",
    techStack: ["Next.js", "Node.js", "TTS API", "TailwindCSS", "Vercel"],
    slug: "quickpod",
    content: {
      html: "<p>QuickPod makes your written content audible. Upload a blog post and get a podcast-style audio instantly.</p>",
    },
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
    type: "open-source",
    liveLink: "chrome-extension://webcam-fx",
    sourceLink: "https://github.com/tonmoydeb/webcam-fx",
    techStack: ["JavaScript", "WebRTC", "Chrome Extension API", "Canvas API"],
    slug: "webcam-fx",
    content: {
      html: "<p>Control your webcam like a pro — add overlays, adjust zoom, and flip view in real-time directly from your browser.</p>",
    },
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
    type: "paid",
    liveLink: "https://schemasync.io",
    sourceLink: "https://github.com/tonmoydeb/schemasync",
    techStack: ["Next.js", "Drizzle ORM", "GitHub API", "PostgreSQL", "Tauri"],
    slug: "schemasync",
    content: {
      html: "<p>SchemaSync helps developers visualize and manage DB schemas with full GitHub repo integration, including branch support.</p>",
    },
  },
];

export default products;
