import type { SxProps, Theme } from "@mui/material";

export function sxMerge(
  ...sxs: (SxProps<Theme> | undefined)[]
): SxProps<Theme> {
  return sxs.flat().filter(Boolean) as SxProps<Theme>;
}
