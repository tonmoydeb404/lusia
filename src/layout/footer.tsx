import { getIcon } from "@/common/icons";
import { Button } from "@/components/ui/button";
import { fetchProfile } from "@/services/cms/profile";
import Link from "next/link";

type Props = {};

const Footer = async (props: Props) => {
  const profileRes = await fetchProfile();

  return (
    <footer className="container pt-20 flex flex-col justify-between flex-wrap sm:items-center sm:flex-row gap-5">
      <p>© 2025 {profileRes?.name}. All rights reserved.</p>

      <div className="flex items-center gap-1.5">
        {profileRes?.contacts.map((item) => {
          const Icon = getIcon(item.ref);

          return (
            <Button
              key={item.href}
              asChild
              size={"icon"}
              variant={"secondary"}
              className="[&_svg]:size-6"
            >
              <Link
                href={item.href}
                target={item.newTab ? "_blank" : undefined}
                title={item.title}
              >
                <Icon />
              </Link>
            </Button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
