import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Buttons/Label",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      source: {
        code: `
          import React from 'react';
          import {
            TextButton,
            PrimaryButton,
            SecondaryButton,
          } from '@components/Button';

          <TextButton>Button</TextButton>
          <PrimaryButton>Button</PrimaryButton>
          <SecondaryButton>Button</SecondaryButton>
        `,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: "radio", options: ["small", "medium", "large"] },
    label: { control: "text" },
    disabled: { control: "boolean" },
    className: {
      control: { type: "radio" },
      options: ["", "compactRadius"],
    },
  },
  args: {
    label: "Button",
    size: "medium",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hovered: Story = {};
Hovered.parameters = {
  pseudo: { hover: true },
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};

export const Focus: Story = {};
Focus.parameters = {
  pseudo: { focus: true },
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};

export const FocusVisible: Story = {};
FocusVisible.parameters = {
  pseudo: { focusVisible: true },
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
};

export const Active: Story = {};
Active.parameters = {
  pseudo: { active: true },
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};
