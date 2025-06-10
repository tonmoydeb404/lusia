import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavLink from "@/router/nav-link";
import paths from "@/router/paths";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { LucideMenu, LucideSearch } from "lucide-react";
import ThemeBtn from "./theme-btn";

type Props = {};

const links = [
  { title: "Home", path: paths.root },
  { title: "About", path: paths.about },
  { title: "Work", path: paths.work },
  { title: "Blog", path: paths.blog.root },
  { title: "Products", path: paths.products.root },
  { title: "Stacks", path: paths.stacks },
  { title: "Contact", path: paths.contact },
];

const Navigation = (props: Props) => {
  return (
    <header className="container flex items-center justify-between py-5">
      <Button
        size={"icon"}
        variant={"outline"}
        className="rounded-full md:hidden"
      >
        <LucideMenu className="size-5!" />
      </Button>

      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList className="border rounded-full overflow-hidden px-3">
          {links.map((item) => (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuLink
                asChild
                className={
                  "px-3 py-2.5 inline-flex text-sm relative after:bottom-0 after:left-0 after:absolute after:w-full after:h-0 after:duration-300 after:bg-foreground/10 hover:after:h-0.5"
                }
              >
                <NavLink
                  href={item.path}
                  className="[&.active]:after:h-0.5 [&.active]:after:bg-foreground"
                >
                  {item.title}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <section className="flex items-center gap-1">
        <Button size={"icon"} variant={"ghost"} className="rounded-full">
          <LucideSearch className="size-5!" />
        </Button>
        <ThemeBtn />
      </section>
    </header>
  );
};

export default Navigation;
