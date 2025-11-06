"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

type Props = {};

const ThemeBtn = (props: Props) => {
  const { setTheme, theme, systemTheme, ref } = useTheme();
  const [mounted, setMounted] = useState(false);

  const appTheme = theme === "system" ? systemTheme : theme;
  const isDark = appTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button
        size={"icon"}
        variant={"secondary"}
        className="animate-pulse"
      ></Button>
    );

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="rounded-full"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title="Toggle Theme"
      ref={ref}
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
