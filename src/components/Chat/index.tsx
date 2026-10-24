'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Header from './Header';
import Input from './Input';
import MessageList from './MessageList';
import { useChat } from '../../hooks/useChat';

export default function ChatPanel() {
  const [open, setOpen] = useState(false);
  const { messages, loading, send } = useChat();

  return (
    <>
      <Fab
        color="primary"
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          right: { xs: 16, sm: 24 },
          bottom: {
            xs: 'calc(16px + env(safe-area-inset-bottom))',
            sm: 24,
          },
          width: { xs: 56, sm: 'auto' },
          px: { sm: 3 },
          borderRadius: { xs: '50%', sm: 28 },
        }}
      >
        <Box
          component="span"
          sx={{
            display: { xs: 'inline', sm: 'none' },
          }}
        >
          💬
        </Box>
        <Box
          component="span"
          sx={{
            display: { xs: 'none', sm: 'inline' },
          }}
        >
          Chat
        </Box>
      </Fab>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100vw', sm: 420 },
              maxWidth: '100vw',
              height: '100dvh',
            },
          },
        }}
      >
        <Stack sx={{ height: '100%' }}>
          <Header onClose={() => setOpen(false)} />
          <MessageList
            messages={messages}
            loading={loading}
            open={open}
          />
          <Input onSend={send} loading={loading} />
        </Stack>
      </Drawer>
    </>
  );
}
