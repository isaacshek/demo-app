import React from "react";

import type { ProgressStepperProps } from "@/src/components/ProgressStepper";
import ProgressStepper from "@/src/components/ProgressStepper";
import Box from "@mui/material/Box";

export const ProgressStepperComponent = ({ ...rest }: ProgressStepperProps) => (
  <Box sx={{ width: 300 }}>
    <ProgressStepper {...rest} />
  </Box>
);
