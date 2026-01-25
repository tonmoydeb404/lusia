"use client";

import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import React, { useCallback, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SearchDialog } from "./dialog";
import { SearchProps } from "./types";

interface SearchBarProps extends SearchProps {}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { links, pages, products } = props;
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Keyboard shortcut: Ctrl/Cmd + K
  const { keys } = useKeyboardShortcut({
    key: "k",
    modifiers: ["meta"],
    onTrigger: toggleOpen,
  });

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => setOpen(true)}
            aria-label="Search Bar Toggle"
          >
            <LuSearch className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            <span>Search</span>
            <KbdGroup>
              {keys.map((k) => (
                <Kbd key={k}>{k}</Kbd>
              ))}
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>

      <SearchDialog
        open={open}
        onOpenChange={setOpen}
        links={links}
        pages={pages}
        products={products}
      />
    </>
  );
};

export default SearchBar;
