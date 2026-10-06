import type { SxProps, Theme } from "@mui/material";
import { sxMerge } from "./";

describe("sxMerge", () => {
  it("should returns an empty array when called with no arguments", () => {
    expect(sxMerge()).toEqual([]);
  });

  it("should returns an empty array when all arguments are undefined", () => {
    expect(sxMerge(undefined, undefined)).toEqual([]);
  });

  it("should wraps a single object in an array", () => {
    const a = { color: "red" };
    expect(sxMerge(a)).toEqual([a]);
  });

  it("should merges multiple objects, preserving order", () => {
    const a = { color: "red" };
    const b = { margin: 2 };
    const c = { padding: 1 };
    expect(sxMerge(a, b, c)).toEqual([a, b, c]);
  });

  it("should filters out undefined values", () => {
    const a = { color: "red" };
    const b = { margin: 2 };
    expect(sxMerge(a, undefined, b)).toEqual([a, b]);
  });

  it("should filters out other falsy values (false, null, 0, empty string)", () => {
    const a = { color: "red" };
    const falsy = [false, null, 0, ""] as unknown as SxProps<Theme>[];
    expect(sxMerge(a, ...falsy)).toEqual([a]);
  });

  it("should flattens array arguments by one level", () => {
    const a = { color: "red" };
    const b = { margin: 2 };
    const c = { padding: 1 };
    expect(sxMerge([a, b], c)).toEqual([a, b, c]);
  });

  it("should filters falsy values inside array arguments", () => {
    const a = { color: "red" };
    const b = { margin: 2 };
    const arr = [a, false, b] as SxProps<Theme>;
    expect(sxMerge(arr)).toEqual([a, b]);
  });

  it("should preserves function styles", () => {
    const fn = (theme: Theme) => ({ color: theme.palette.primary.main });
    const result = sxMerge(fn, { margin: 1 }) as unknown[];
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(fn);
  });

  it("should preserves object references (no cloning)", () => {
    const a = { color: "red" };
    const result = sxMerge(a) as unknown[];
    expect(result[0]).toBe(a);
  });

  it("should does not mutate the input arrays", () => {
    const a = { color: "red" };
    const b = { margin: 2 };
    const input = [a, b];
    sxMerge(input, undefined);
    expect(input).toEqual([a, b]);
    expect(input).toHaveLength(2);
  });

  it("should handles conditional styles inline", () => {
    const base = { display: "flex" };
    const active = { color: "blue" };
    const isActive = false;
    expect(sxMerge(base, isActive ? active : undefined)).toEqual([base]);
  });
});
