import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

function makeButton(options: ButtonProps) {
  return (props: ButtonProps) => <Button {...props} {...options} />;
}

export const TextButton = makeButton({
  color: "secondary",
  variant: "text",
});

export const PrimaryButton = makeButton({
  color: "primary",
  variant: "contained",
});

export const SecondaryButton = makeButton({
  color: "primary",
  variant: "outlined",
});
