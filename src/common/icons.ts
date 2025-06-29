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

export const getIcon = (name: unknown) => {
  const icon = icons?.[name as keyof typeof icons];

  if (icon) {
    return icon;
  }

  return LuGlobe;
};
