import envConfig from "@/common/env-config";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { SearchItem, SearchProps } from "./types";

const useSearchBar = (props: SearchProps) => {
  const { links, pages, products } = props;
  const [query, setQuery] = useState<string>("");

  const typedLinks = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = [];

    links.forEach((link) => {
      if (items.findIndex((item) => item.href === link.href) !== -1) {
        return;
      }

      items.push({
        type: "link",
        title: link.title,
        description: null,
        href: link.href,
        newTab: true,
      });
    });

    return items;
  }, [links]);

  const typedPages = useMemo<SearchItem[]>(
    () =>
      pages.map((page) => ({
        type: "page",
        title: page.slug === "home" ? "Home" : page.title,
        description: page.description,
        href: `${envConfig.BASE_URL}/${page.slug}`,
        newTab: false,
      })),
    [pages]
  );

  const typedProducts = useMemo<SearchItem[]>(
    () =>
      products.map((product) => ({
        type: "product",
        title: product.title,
        description: product.description,
        href: product.liveLink || product.sourceLink,
        newTab: true,
      })),
    [products]
  );

  // Initialize Fuse instances
  const linkFuse = useMemo(() => {
    return new Fuse(typedLinks, {
      keys: ["title", "description"],
      threshold: 0.4,
      includeScore: true,
    });
  }, [typedLinks]);

  const pageFuse = useMemo(() => {
    return new Fuse(typedPages, {
      keys: ["title", "description"],
      threshold: 0.4,
      includeScore: true,
    });
  }, [typedPages]);

  const productFuse = useMemo(() => {
    return new Fuse(typedProducts, {
      keys: ["title", "description"],
      threshold: 0.4,
      includeScore: true,
    });
  }, [typedProducts]);

  // Perform searches
  const linkResults = useMemo(() => linkFuse.search(query), [linkFuse, query]);
  const pageResults = useMemo(() => pageFuse.search(query), [pageFuse, query]);
  const productResults = useMemo(
    () => productFuse.search(query),
    [productFuse, query]
  );

  const hasResults =
    linkResults.length > 0 ||
    pageResults.length > 0 ||
    productResults.length > 0;

  return {
    linkResults,
    pageResults,
    productResults,
    hasResults,
    query,
    setQuery,
    typedLinks,
    typedPages,
    typedProducts,
  };
};

export default useSearchBar;
