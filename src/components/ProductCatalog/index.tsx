"use client";

import { useRouter } from "next/navigation";
import type { Product } from "@/src/types/product";
import { ProductList } from "../ProductList";

export function ProductCatalog({ products }: { products: Product[] }) {
  const router = useRouter();
  return (
    <ProductList
      products={products}
      onSelectProduct={(p) => router.push(`/products/${p.id}`)}
    />
  );
}
