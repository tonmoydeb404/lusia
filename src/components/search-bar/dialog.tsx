"use client";

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import React from "react";
import EmptyState from "./empty-state";
import useSearchBar from "./hook";
import InitialState from "./initial-state";
import SearchBarItem from "./item";
import { SearchItem, SearchProps } from "./types";

interface SearchDialogProps extends SearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (item: SearchItem) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = (props) => {
  const { open, onOpenChange, onSelect, links, pages, products } = props;
  const {
    hasResults,
    linkResults,
    pageResults,
    productResults,
    query,
    setQuery,
    typedLinks,
    typedPages,
    typedProducts,
  } = useSearchBar({ links, pages, products });

  const handleSelect = (item: SearchItem) => {
    onSelect(item);
    onOpenChange(false);
    setQuery("");
  };

  const showInitialState = !query.trim();

  const groups = [
    {
      title: "Links",
      data: linkResults,
    },
    {
      title: "Pages",
      data: pageResults,
    },
    {
      title: "Products",
      data: productResults,
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search links, pages, products..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {showInitialState && (
          <InitialState
            handleSelect={handleSelect}
            links={typedLinks}
            pages={typedPages}
            products={typedProducts}
          />
        )}

        {groups.map((group) => {
          if (group.data.length === 0) {
            return null;
          }

          return (
            <CommandGroup heading={group.title} key={group.title}>
              {group.data.map((result) => (
                <SearchBarItem
                  key={`link-${result.item.href}`}
                  handleSelect={() => handleSelect(result.item)}
                  data={result.item}
                />
              ))}
            </CommandGroup>
          );
        })}

        {!hasResults && <EmptyState />}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
