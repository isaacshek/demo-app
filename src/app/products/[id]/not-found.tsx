import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LinkButton } from "@/src/components/LinkButton";

export default function ProductNotFound() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3" component="h1">
          Product not found
        </Typography>
        <Typography color="text.secondary">
          We couldn&apos;t find the product you were looking for. It may have
          been removed, or the link may be incorrect.
        </Typography>
        <LinkButton href="/" variant="contained">
          Back to products
        </LinkButton>
      </Stack>
    </Container>
  );
}
