import { BiLogoGithub, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { LuFile, LuGlobe } from "react-icons/lu";

export const icons = {
  resume: LuFile,
  // socials
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
