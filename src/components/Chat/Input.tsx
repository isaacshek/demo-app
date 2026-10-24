import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

type Props = {
  onSend: (text: string) => void;
  loading: boolean;
};

export default function ChatInput({ onSend, loading }: Props) {
  const [input, setInput] = useState('');

  function submit() {
    if (!input.trim() || loading) return;
    onSend(input);
    setInput('');
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="flex-end"
      sx={{
        p: 2,
        pb: 'calc(16px + env(safe-area-inset-bottom))',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (
            e.key === 'Enter' &&
            !e.shiftKey &&
            !e.nativeEvent.isComposing
          ) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder="e.g. Which product is best for…"
        slotProps={{
          htmlInput: { style: { fontSize: 16 } },
        }}
      />
      <Button
        variant="contained"
        onClick={submit}
        disabled={loading}
        sx={{ minWidth: 80 }}
      >
        {loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          'Send'
        )}
      </Button>
    </Stack>
  );
}
