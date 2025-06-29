import SearchBar from "@/components/search-bar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavLink from "@/router/nav-link";
import { fetchPages } from "@/services/cms/page";
import { fetchProducts } from "@/services/cms/product";
import { fetchProfile } from "@/services/cms/profile";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { links } from "./config";
import DrawerNavigation from "./drawer-navigation";
import ThemeBtn from "./theme-btn";

type Props = {};

const Navigation = async (props: Props) => {
  const pages = await fetchPages();
  const products = await fetchProducts();
  const profile = await fetchProfile();

  return (
    <header className="container flex items-center justify-between py-5">
      <DrawerNavigation />

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
        <SearchBar
          pages={pages}
          products={products}
          links={[
            ...(profile?.socials || []),
            ...(profile?.contacts || []),
            ...(profile?.callToActions || []),
          ]}
        />
        <ThemeBtn />
      </section>
    </header>
  );
};

export default Navigation;
