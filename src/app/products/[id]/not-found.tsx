import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LinkButton } from '@/src/components/LinkButton';
import { constants } from '@/src/constants/';

export default function ProductNotFound() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3" component="h1">
          {constants.productNotFound.title}
        </Typography>
        <Typography color="text.secondary">{constants.productNotFound.description}</Typography>
        <LinkButton href="/" variant="contained">
          {constants.backToProducts}
        </LinkButton>
      </Stack>
    </Container>
  );
}
