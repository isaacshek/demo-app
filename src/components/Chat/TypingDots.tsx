import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { keyframes } from '@mui/material/styles';

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-4px); opacity: 1; }
`;

export default function TypingDots() {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{ py: 0.5 }}
      aria-label="Assistant is typing"
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: 'text.secondary',
            animation: `${bounce} 1.2s infinite ease-in-out`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </Stack>
  );
}
