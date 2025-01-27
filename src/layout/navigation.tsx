import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { LucideHome, LucideSun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <header className="container flex items-center justify-between py-5">
      <Button size={"icon"} variant={"ghost"} className="rounded-full hidden">
        <LucideHome className="!size-5" />
      </Button>

      <Link href={"/"}>
        <Image src={"/brand/logo.svg"} alt="Logo" width={50} height={50} />
      </Link>

      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList className="border rounded-full overflow-hidden">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "pl-5")}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Javascript
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "pr-5")}
            >
              React JS
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button size={"icon"} variant={"ghost"} className="rounded-full">
        <LucideSun className="!size-5" />
      </Button>
    </header>
  );
};

export default Navigation;
