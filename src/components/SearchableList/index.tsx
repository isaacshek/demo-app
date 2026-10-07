'use client';

import type { ReactNode } from 'react';
import Alert from '@mui/material/Alert';
import Stack, { StackProps } from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useSearch } from '@/src/hooks/useSearch';
import { constants } from '@/src/constants/';

export interface SearchableListProps<T> extends Omit<StackProps, 'children'> {
  items: T[];
  getKey: (item: T) => string | number;
  getSearchText: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  searchLabel?: string;
  emptyMessage?: ReactNode;
}

export function SearchableList<T>({
  items,
  getKey,
  getSearchText,
  renderItem,
  searchLabel = 'Search',
  emptyMessage = constants.search.noResults,
  ...props
}: SearchableListProps<T>) {
  const { query, setQuery, filteredItems } = useSearch(items, getSearchText);

  return (
    <Stack spacing={2} {...props}>
      <TextField label={searchLabel} value={query} onChange={(e) => setQuery(e.target.value)} />
      <Stack spacing={2}>
        {filteredItems.map((item) => (
          <div key={getKey(item)}>{renderItem(item)}</div>
        ))}
        {!filteredItems.length && <Alert severity="info">{emptyMessage}</Alert>}
      </Stack>
    </Stack>
  );
}
