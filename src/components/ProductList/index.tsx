"use client";

import type { Product } from "@/src/types/product";
import { ProductCard } from "../ProductCard";
import { SearchableList, type SearchableListProps } from "../SearchableList";

const getKey = (p: Product) => p.id;
const getSearchText = (p: Product) => `${p.name} ${p.description}`;

interface ProductListProps extends Omit<
  SearchableListProps<Product>,
  "items" | "getKey" | "getSearchText" | "renderItem"
> {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export function ProductList({
  products,
  onSelectProduct,
  ...props
}: ProductListProps) {
  return (
    <SearchableList
      items={products}
      getKey={getKey}
      getSearchText={getSearchText}
      searchLabel="Search products"
      emptyMessage="No products match your search."
      renderItem={(p) => <ProductCard product={p} onSelect={onSelectProduct} />}
      {...props}
    />
  );
}
