import Box from '@mui/material/Box';
import TypingDots from './TypingDots';
import type { Msg } from '../../types/msg';

type Props = {
  message: Msg;
  showTyping?: boolean;
};

export default function MessageBubble({
  message,
  showTyping = false,
}: Props) {
  const isUser = message.role === 'user';

  return (
    <Box
      sx={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        bgcolor: isUser
          ? 'primary.main'
          : message.error
            ? 'error.light'
            : 'action.hover',
        color: isUser
          ? 'primary.contrastText'
          : message.error
            ? 'error.contrastText'
            : 'text.primary',
        px: 1.5,
        py: 1,
        borderRadius: 2,
        maxWidth: '85%',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'anywhere',
      }}
    >
      {showTyping ? <TypingDots /> : message.content}
    </Box>
  );
}
