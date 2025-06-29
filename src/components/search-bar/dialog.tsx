"use client";

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { useSearchQuery } from "@/router/use-search-query";
import React, { useEffect } from "react";
import EmptyState from "./empty-state";
import useSearchBar from "./hook";
import InitialState from "./initial-state";
import SearchBarItem from "./item";
import { SearchItem, SearchProps } from "./types";

interface SearchDialogProps extends SearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = (props) => {
  const { open, onOpenChange, links, pages, products } = props;
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
  const searchQueries = useSearchQuery();
  const urlQuery = searchQueries.get("query");

  // ----------------------------------------------------------------------

  const handleSelect = (item: SearchItem) => {
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

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (typeof urlQuery === "string" && urlQuery.length > 0) {
      setQuery(urlQuery);
      onOpenChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlQuery]);

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
