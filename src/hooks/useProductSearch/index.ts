"use client";
import type { Product } from "@/src/types/product";
import { useSearch } from "../useSearch";

const getProductSearchText = (p: Product) => `${p.name} ${p.description}`;

export const useProductSearch = (products: Product[]) => {
  const { query, setQuery, filteredItems } = useSearch(
    products,
    getProductSearchText,
  );

  return { query, setQuery, filteredProducts: filteredItems } as const;
};
