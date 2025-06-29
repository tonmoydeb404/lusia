import { useMemo } from "react";
import { LuBookOpen, LuSearch, LuStar, LuTrendingUp } from "react-icons/lu";
import { CommandGroup } from "../ui/command";
import SearchBarItem from "./item";
import { SearchItem } from "./types";

interface Props {
  handleSelect: (item: SearchItem) => void;
  links: SearchItem[];
  products: SearchItem[];
  pages: SearchItem[];
}

const InitialState = (props: Props) => {
  const { links, pages, products, handleSelect } = props;

  const defaultSuggestions = useMemo(() => {
    const suggestions = [];

    if (pages.length > 0) {
      suggestions.push(...pages.slice(0, 3));
    }

    if (products.length > 0) {
      suggestions.push(...products.slice(0, 2));
    }

    if (links.length > 0) {
      suggestions.push(...links.slice(0, 2));
    }

    return suggestions;
  }, [links, pages, products]);

  return (
    <>
      {defaultSuggestions.length > 0 ? (
        <CommandGroup heading="Quick Access">
          {defaultSuggestions.map((item, index) => {
            return (
              <SearchBarItem
                key={`suggestion-${item.type}-${index}`}
                handleSelect={handleSelect}
                data={item}
              />
            );
          })}
        </CommandGroup>
      ) : (
        <div className="px-6 py-14 text-center text-sm text-gray-500">
          <LuSearch className="mx-auto h-6 w-6 mb-2 text-gray-300" />
          <p>No content available to search</p>
        </div>
      )}

      {/* Search tips */}
      <CommandGroup heading="Search Tips" className="pb-5">
        <div className="px-3 py-2 text-xs text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <LuBookOpen />
            <span>Try searching for pages, products, or links</span>
          </div>
          <div className="flex items-center gap-2">
            <LuTrendingUp />
            <span>Use keywords to find relevant content</span>
          </div>
          <div className="flex items-center gap-2">
            <LuStar />
            <span>Press ⌘K to quickly open search</span>
          </div>
        </div>
      </CommandGroup>
    </>
  );
};

export default InitialState;
