import React from "react";

import {
  TextButton,
  PrimaryButton,
  SecondaryButton,
} from "@/src/components/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <Stack direction="row" spacing={2}>
    <TextButton {...rest}>{label}</TextButton>
    <PrimaryButton {...rest}>{label}</PrimaryButton>
    <SecondaryButton {...rest}>{label}</SecondaryButton>
  </Stack>
);
