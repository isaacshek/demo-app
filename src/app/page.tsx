import { products } from "@/src/data/products";
import { ProductCatalog } from "@/src/components/ProductCatalog";
import ProgressStepper from "@/src/components/ProgressStepper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3">Title</Typography>
        <Typography color="text.secondary">Description</Typography>
        <ProgressStepper numSteps={2} activeStep={0} />
      </Stack>
      <ProductCatalog products={products} />
    </Container>
  );
}
