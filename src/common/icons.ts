import {
  BiLogoDiscordAlt,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";
import {
  LuAtSign,
  LuFile,
  LuFileText,
  LuGlobe,
  LuPackage,
  LuSquareArrowOutUpRight,
} from "react-icons/lu";

export const icons = {
  resume: LuFile,
  email: LuAtSign,

  // document
  page: LuFileText,
  product: LuPackage,
  link: LuSquareArrowOutUpRight,

  // socials
  discord: BiLogoDiscordAlt,
  github: BiLogoGithub,
  linkedin: BiLogoLinkedin,
  whatsapp: BiLogoWhatsapp,
};

export const iconColors: Partial<Record<keyof typeof icons, string>> = {
  discord: "#5865F2",
  github: "var(--foreground)",
  linkedin: "#0A66C2",
  whatsapp: "#25D366",
};

export const getIcon = (name: unknown) => {
  const icon = icons?.[name as keyof typeof icons];
  const color = iconColors?.[name as keyof typeof icons];

  if (icon !== undefined) {
    return { icon, color };
  }

  return { icon: LuGlobe, color: undefined };
};
