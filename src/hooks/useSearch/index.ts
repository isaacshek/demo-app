"use client";
import { useMemo, useState } from "react";

export function useSearch<T>(items: T[], getSearchText: (item: T) => string) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? items.filter((item) => getSearchText(item).toLowerCase().includes(term))
      : items;
  }, [items, query, getSearchText]);

  return { query, setQuery, filteredItems } as const;
}
