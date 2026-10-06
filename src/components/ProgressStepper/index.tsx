import Box from "@mui/material/Box";
import type { StackProps } from "@mui/material/Stack";
import Stack from "@mui/material/Stack";
import { sxMerge } from "@/src/utils/sx-merge";

export interface ProgressStepperProps extends Omit<
  StackProps,
  "direction" | "spacing"
> {
  numSteps: number;
  activeStep: number;
}

const ProgressStepper = ({
  numSteps,
  activeStep,
  sx,
  ...rest
}: ProgressStepperProps) => {
  const currentStep = Math.min(Math.max(activeStep + 1, 0), numSteps);

  return (
    <Stack
      role="progressbar"
      aria-label="Progress"
      aria-valuemin={0}
      aria-valuemax={numSteps}
      aria-valuenow={currentStep}
      aria-valuetext={`Step ${currentStep} of ${numSteps}`}
      direction="row"
      spacing={1}
      sx={sxMerge({ width: "100%" }, sx)}
      {...rest}
    >
      {Array.from({ length: numSteps }).map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: 4,
            borderRadius: 2,
            backgroundColor: i <= activeStep ? "#4194cb" : "#d3d3d3",
          }}
        />
      ))}
    </Stack>
  );
};

export default ProgressStepper;
