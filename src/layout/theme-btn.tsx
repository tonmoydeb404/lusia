"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

type Props = {};

const ThemeBtn = (props: Props) => {
  const { setTheme, theme, systemTheme } = useTheme();
  const appTheme = theme === "system" ? systemTheme : theme;
  const isDark = appTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full"
      onClick={toggleTheme}
    >
      {isDark ? (
        <LuMoon className={cn("size-5!")} />
      ) : (
        <LuSun className={cn("size-5!")} />
      )}
    </Button>
  );
};

export default ThemeBtn;
