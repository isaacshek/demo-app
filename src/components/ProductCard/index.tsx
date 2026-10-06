import { PrimaryButton } from "../Button";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import type { Product } from "@/src/types/product";

export interface ProductCardProps extends Omit<CardProps, "onSelect"> {
  product: Product;
  onSelect?: (product: Product) => void;
  actionLabel?: string;
  currency?: string;
  locale?: string;
}

export function ProductCard({
  product,
  onSelect,
  actionLabel = "View details",
  currency = "GBP",
  locale = "en-GB",
  ...props
}: ProductCardProps) {
  const price = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(product.price);

  return (
    <Card variant="outlined" {...props}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">{product.name}</Typography>
          {product.status && <Chip size="small" label={product.status} />}
        </Stack>
        <Typography color="text.secondary">{product.description}</Typography>
        <Typography fontWeight={700}>{price}</Typography>
      </CardContent>
      {onSelect && (
        <CardActions>
          <PrimaryButton onClick={() => onSelect(product)}>
            {actionLabel}
          </PrimaryButton>
        </CardActions>
      )}
    </Card>
  );
}
