import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import TypingDots from './TypingDots';
import type { Msg } from '../../types/msg';

type Props = { message: Msg; showTyping?: boolean };

export default function MessageBubble({
  message,
  showTyping = false,
}: Props) {
  const isUser = message.role === 'user';
  const isPlain = isUser || message.error;

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
        overflowWrap: 'anywhere',
        // plain text keeps its line breaks; Markdown must NOT use pre-wrap
        whiteSpace: isPlain ? 'pre-wrap' : 'normal',

        // tighten Markdown spacing
        '& > :first-of-type': { mt: 0 },
        '& > :last-child': { mb: 0 },
        '& p': { m: 0 },
        '& p + p': { mt: 1 },
        '& ul, & ol': { my: 0.5, pl: 2.5 },
        '& li': { m: 0 },
        '& li > p': { m: 0 },
        '& li > ul, & li > ol': { my: 0 },
        '& li + li': { mt: 0.25 },
        '& pre': { overflowX: 'auto', my: 1 },
      }}
    >
      {showTyping ? (
        <TypingDots />
      ) : isPlain ? (
        message.content
      ) : (
        <ReactMarkdown>{message.content}</ReactMarkdown>
      )}
    </Box>
  );
}
