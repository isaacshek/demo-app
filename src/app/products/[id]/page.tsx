import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { products } from '@/src/data/products';
import { LinkButton } from '@/src/components/LinkButton';
import { constants } from '@/src/constants';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const getProduct = cache(async (id: string) => products.find((p) => p.id === id));

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return { title: 'Product not found' };

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'website',
      url: `/products/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  const price = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(product.price);

  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={2}>
        <LinkButton href="/" sx={{ alignSelf: 'flex-start' }}>
          ← {constants.backToProducts}
        </LinkButton>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3" component="h1">
            {product.name}
          </Typography>
          {product.status && <Chip label={product.status} />}
        </Stack>
        <Typography color="text.secondary">{product.description}</Typography>
        <Typography variant="h5" fontWeight={700}>
          {price}
        </Typography>
      </Stack>
    </Container>
  );
}
