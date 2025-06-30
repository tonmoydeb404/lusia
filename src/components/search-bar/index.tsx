"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import { SearchDialog } from "./dialog";
import { SearchProps } from "./types";

interface SearchBarProps extends SearchProps {}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { links, pages, products } = props;
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full"
        onClick={() => setOpen(true)}
        aria-label="Search Bar Toggle"
        title="Open Search Bar"
      >
        <LuSearch className="size-5" />
      </Button>

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
