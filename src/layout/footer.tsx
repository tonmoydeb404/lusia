import { getIcon } from "@/common/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fetchProfile } from "@/services/cms/profile";
import Link from "next/link";

type Props = {};

const Footer = async (props: Props) => {
  const profileRes = await fetchProfile();

  return (
    <footer className="container pt-20 flex flex-col justify-between flex-wrap sm:items-center sm:flex-row gap-5">
      <p className="font-heading">
        © 2025 {profileRes?.name}. All rights reserved.
      </p>

      <TooltipProvider>
        <div className="flex items-center gap-1.5">
          {profileRes?.contacts.map((item) => {
            const Icon = getIcon(item.ref);

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    size={"icon"}
                    variant={"secondary"}
                    className="[&_svg]:size-6"
                    aria-label={item.title}
                    aria-description="Footer links"
                  >
                    <Link
                      href={item.href}
                      target={item.newTab ? "_blank" : undefined}
                    >
                      <Icon.icon color={Icon.color} />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </footer>
  );
};

export default Footer;
