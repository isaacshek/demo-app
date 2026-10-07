'use client';

import { useRouter } from 'next/navigation';
import type { Product } from '@/src/types/product';
import { ProductList } from '../ProductList';

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({
  products,
}: ProductCatalogProps) {
  const router = useRouter();
  return (
    <ProductList
      products={products}
      onSelectProduct={(p) =>
        router.push(`/products/${p.id}`)
      }
    />
  );
}
