// src/components/LinkButton/index.tsx
"use client";

import Link from "next/link";
import Button, { type ButtonProps } from "@mui/material/Button";

export type LinkButtonProps = Omit<ButtonProps<typeof Link>, "component"> & {
  href: string;
};

export function LinkButton(props: LinkButtonProps) {
  return <Button component={Link} {...props} />;
}
