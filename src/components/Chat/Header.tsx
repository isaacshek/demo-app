import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = { onClose: () => void };

export default function Header({ onClose }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: 2,
        py: 1.5,
        pt: 'calc(12px + env(safe-area-inset-top))',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Typography variant="h6" noWrap>
        Ask about our products
      </Typography>
      <IconButton onClick={onClose} aria-label="Close chat">
        ✕
      </IconButton>
    </Stack>
  );
}
