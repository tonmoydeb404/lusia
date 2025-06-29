"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import { SearchDialog } from "./dialog";
import { SearchItem, SearchProps } from "./types";

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

  const handleSelect = (item: SearchItem): void => {
    if (item.type === "link") {
      if (item.newTab) {
        window.open(item.href, "_blank");
      } else {
        window.location.href = item.href;
      }
    } else if (item.type === "page") {
      router.push(`/${item.slug}`);
    } else if (item.type === "product") {
      window.open(item.liveLink, "_blank");
    }
  };

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full"
        onClick={() => setOpen(true)}
      >
        <LuSearch className="size-5" />
      </Button>

      <SearchDialog
        open={open}
        onOpenChange={setOpen}
        onSelect={handleSelect}
        links={links}
        pages={pages}
        products={products}
      />
    </>
  );
};

export default SearchBar;
