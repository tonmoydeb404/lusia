"use client";

import { useRouter } from "next/navigation";
import { useSearchQuery } from "./use-search-query";

type QueryParams = Record<string, any>;

export const useQueryRouter = () => {
  const router = useRouter();
  const searchQuery = useSearchQuery();

  const updateQuery = (params: QueryParams, method: "push" | "replace") => {
    // Convert current search params to an object
    const currentParams = Object.fromEntries(searchQuery.entries());

    // Merge with new params, updating existing ones
    const updatedParams = {
      ...currentParams,
      ...params,
    };

    // Convert back to a query string
    const queryString = toQuerySearchParams(updatedParams);
    const url = `?${queryString}`;

    // Call the appropriate router method
    router[method](url);
  };

  return {
    push: (params: QueryParams) => updateQuery(params, "push"),
    replace: (params: QueryParams) => updateQuery(params, "replace"),
  };
};

// ----------------------------------------------------------------------

function toQuerySearchParams<T extends Record<string, any>>(params: T): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, String(v)));
      } else if (value instanceof Date) {
        searchParams.append(key, value.toISOString());
      } else {
        searchParams.append(key, String(value));
      }
    }
  });

  return searchParams.toString();
}
