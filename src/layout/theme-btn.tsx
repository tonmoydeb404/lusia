"use client";

import { Button } from "@/components/ui/button";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

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
        <LucideSun className="size-5!" />
      ) : (
        <LucideMoon className="size-5!" />
      )}
    </Button>
  );
};

export default ThemeBtn;
