import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { LucideHome, LucideSun } from "lucide-react";
import Image from "next/image";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <header className="container flex items-center justify-between py-5">
      <Button size={"icon"} variant={"ghost"} className="rounded-full">
        <LucideHome className="!size-5" />
      </Button>

      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="size-10 bg-foreground rounded-full inline-flex flex-col items-center justify-center mx-4">
              <Image src={"/vercel.svg"} alt="Logo" width={20} height={20} />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Javascript
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
