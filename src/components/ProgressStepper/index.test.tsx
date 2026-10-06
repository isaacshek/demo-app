import { render, screen } from "@testing-library/react";
import ProgressStepper from "./";

const ACTIVE_COLOR = "rgb(65, 148, 203)"; // #4194cb
const INACTIVE_COLOR = "rgb(211, 211, 211)"; // #d3d3d3

const renderStepper = (
  props: Partial<Parameters<typeof ProgressStepper>[0]> = {},
) => {
  render(
    <ProgressStepper
      data-testid="stepper"
      numSteps={4}
      activeStep={1}
      {...props}
    />,
  );
  const root = screen.getByTestId("stepper");
  return { root, steps: Array.from(root.children) as HTMLElement[] };
};

describe("ProgressStepper", () => {
  it("should renders one segment per step", () => {
    const { steps } = renderStepper({ numSteps: 5 });
    expect(steps).toHaveLength(5);
  });

  it("should renders no segments when numSteps is 0", () => {
    const { steps } = renderStepper({ numSteps: 0, activeStep: 0 });
    expect(steps).toHaveLength(0);
  });

  it("should highlights segments up to and including the active step", () => {
    const { steps } = renderStepper({ numSteps: 4, activeStep: 1 });
    expect(steps[0]).toHaveStyle({ backgroundColor: ACTIVE_COLOR });
    expect(steps[1]).toHaveStyle({ backgroundColor: ACTIVE_COLOR });
    expect(steps[2]).toHaveStyle({ backgroundColor: INACTIVE_COLOR });
    expect(steps[3]).toHaveStyle({ backgroundColor: INACTIVE_COLOR });
  });

  it("should highlights only the first segment when activeStep is 0", () => {
    const { steps } = renderStepper({ numSteps: 3, activeStep: 0 });
    expect(steps[0]).toHaveStyle({ backgroundColor: ACTIVE_COLOR });
    expect(steps[1]).toHaveStyle({ backgroundColor: INACTIVE_COLOR });
    expect(steps[2]).toHaveStyle({ backgroundColor: INACTIVE_COLOR });
  });

  it("should highlights nothing when activeStep is negative", () => {
    const { steps } = renderStepper({ numSteps: 3, activeStep: -1 });
    steps.forEach((step) =>
      expect(step).toHaveStyle({ backgroundColor: INACTIVE_COLOR }),
    );
  });

  it("should highlights every segment when activeStep is the last step", () => {
    const { steps } = renderStepper({ numSteps: 3, activeStep: 2 });
    steps.forEach((step) =>
      expect(step).toHaveStyle({ backgroundColor: ACTIVE_COLOR }),
    );
  });

  it("should highlights every segment when activeStep exceeds numSteps", () => {
    const { steps } = renderStepper({ numSteps: 3, activeStep: 10 });
    steps.forEach((step) =>
      expect(step).toHaveStyle({ backgroundColor: ACTIVE_COLOR }),
    );
  });

  it("should lays segments out in a full-width row by default", () => {
    const { root } = renderStepper();
    expect(root).toHaveStyle({ display: "flex", flexDirection: "row" });
    expect(root).toHaveStyle({ width: "100%" });
  });

  it("should merges a custom sx with the default width", () => {
    const { root } = renderStepper({ sx: { opacity: 0.5 } });
    expect(root).toHaveStyle({ width: "100%", opacity: "0.5" });
  });

  it("should lets a custom sx override the default width", () => {
    const { root } = renderStepper({ sx: { width: "50%" } });
    expect(root).toHaveStyle({ width: "50%" });
  });

  it("should accepts an array sx", () => {
    const { root } = renderStepper({
      sx: [{ opacity: 0.5 }, { width: "75%" }],
    });
    expect(root).toHaveStyle({ opacity: "0.5", width: "75%" });
  });

  it("should forwards extra props to the root element", () => {
    const { root } = renderStepper({ "aria-label": "Checkout progress" });
    expect(root).toHaveAttribute("aria-label", "Checkout progress");
  });
});
