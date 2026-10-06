import { act, renderHook } from "@testing-library/react";
import { useProductSearch } from "./";
import type { Product } from "@/src/types/product";

const products = [
  { id: "1", name: "Solo Plan", description: "For individuals" },
  { id: "2", name: "Team Plan", description: "For small groups" },
  { id: "3", name: "Enterprise", description: "For large orgs" },
] as Product[];

describe("useProductSearch", () => {
  it("returns all products for an empty query", () => {
    const { result } = renderHook(() => useProductSearch(products));
    expect(result.current.filteredProducts).toEqual(products);
  });

  it("filters case-insensitively and trims whitespace", () => {
    const { result } = renderHook(() => useProductSearch(products));
    act(() => result.current.setQuery("  TEAM  "));
    expect(result.current.filteredProducts).toEqual([products[1]]);
  });

  it("matches against the description too", () => {
    const { result } = renderHook(() => useProductSearch(products));
    act(() => result.current.setQuery("large"));
    expect(result.current.filteredProducts).toEqual([products[2]]);
  });

  it("returns an empty list when no product matches", () => {
    const { result } = renderHook(() => useProductSearch(products));
    act(() => result.current.setQuery("missing"));
    expect(result.current.filteredProducts).toEqual([]);
  });
});
