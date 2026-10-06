import { act, renderHook } from "@testing-library/react";
import { useToggle } from "./";

describe("useToggle", () => {
  it("should defaults to false and toggles", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
  });

  it("should supports an initial value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });
});
