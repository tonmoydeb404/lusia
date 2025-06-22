"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

type Props = {};

const ThemeBtn = (props: Props) => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <LuSun className="size-5!" />
      ) : (
        <LuMoon className="size-5!" />
      )}
    </Button>
  );
};

export default ThemeBtn;
