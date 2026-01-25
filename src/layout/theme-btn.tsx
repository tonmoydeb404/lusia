"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { useTheme } from "@/lib/next-themes";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeBtn = () => {
  const { setTheme, theme, systemTheme, ref } = useTheme();
  const [mounted, setMounted] = useState(false);

  const appTheme = theme === "system" ? systemTheme : theme;
  const isDark = appTheme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  // Keyboard shortcut: Ctrl/Cmd + Shift + L
  const { keys } = useKeyboardShortcut({
    key: "l",
    modifiers: ["meta", "shift"],
    onTrigger: toggleTheme,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button
        size={"icon"}
        variant={"secondary"}
        className="animate-pulse"
        aria-label="Toggle Theme"
      ></Button>
    );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-full"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          ref={ref}
        >
          {isDark ? (
            <LuMoon className={cn("size-5!")} />
          ) : (
            <LuSun className={cn("size-5!")} />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Toggle Theme</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeBtn;
