'use client';

import { useState } from 'react';
import type { Msg } from '../../types/msg';

export function useChat() {
  const [messages, setMessages] = useState<Msg[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [
      ...messages,
      { role: 'user', content: trimmed },
    ];
    setMessages([
      ...next,
      { role: 'assistant', content: '' },
    ]);
    setLoading(true);

    // error bubbles are for display only, never sent to the model
    const payload = next
      .filter((m) => !m.error)
      .map(({ role, content }) => ({
        role,
        content,
      }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payload,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        setMessages([
          ...next,
          {
            role: 'assistant',
            content: `Error ${res.status}: ${err}`,
            error: true,
          },
        ]);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let text = '';
      while (true) {
        const { done, value } =
          await reader.read();
        if (done) break;
        text += decoder.decode(value, {
          stream: true,
        });
        setMessages([
          ...next,
          { role: 'assistant', content: text },
        ]);
      }
    } catch {
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            'Network error. Please try again.',
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, loading, send };
}
