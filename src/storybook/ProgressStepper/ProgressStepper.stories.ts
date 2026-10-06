import { ProgressStepperComponent } from './ProgressStepper';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Progress Stepper',
  component: ProgressStepperComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      source: {
        code: `
          import React from 'react';
          import ProgressStepper from '@/components/ProgressStepper';

          export const ProgressStepperComponent = () => (
            <Box sx={{ width: 300 }}>
              <ProgressStepper activeStep={3} numSteps={6} />
            </Box>
          );
        `,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    numSteps: { control: 'number' },
    activeStep: { control: 'number' },
  },
  args: {
    numSteps: 4,
    activeStep: 2,
  },
} satisfies Meta<typeof ProgressStepperComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeStep: 1
  }
};
