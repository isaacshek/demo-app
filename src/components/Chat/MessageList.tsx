import { useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MessageBubble from './MessageBubble';
import type { Msg } from '../../types/msg';

type Props = {
  messages: Msg[];
  loading: boolean;
  open: boolean;
};

export default function MessageList({
  messages,
  loading,
  open,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, open]);

  return (
    <Stack
      spacing={1}
      sx={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        p: 2,
      }}
    >
      {messages.length === 0 && (
        <Typography color="text.secondary" variant="body2">
          Ask me anything about the products.
        </Typography>
      )}
      {messages.map((m, i) => (
        <MessageBubble
          key={i}
          message={m}
          showTyping={
            loading && m.role === 'assistant' && m.content === ''
          }
        />
      ))}
      <div ref={bottomRef} />
    </Stack>
  );
}
