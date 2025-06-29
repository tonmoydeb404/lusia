import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { links } from "./config";

type Props = {};

const DrawerNavigation = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="rounded-full md:hidden"
        >
          <LuMenu className="size-5!" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Tonmoy Deb</DrawerTitle>
            <DrawerDescription>Lorem ipsum dolor sit amet.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex flex-col gap-y-1">
            {links.map((item, index) => (
              <DrawerClose key={index} asChild>
                <Button variant={"outline"} asChild>
                  <Link href={item.path}>{item.title}</Link>
                </Button>
              </DrawerClose>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="secondary">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNavigation;
