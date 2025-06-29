"use client";

import isBrowser from "is-browser";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export const useSearchQuery = isBrowser
  ? useSearchParams
  : () => new ReadonlyURLSearchParams();
