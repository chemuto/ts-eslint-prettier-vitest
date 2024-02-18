import { describe, it, expect } from "vitest";
import { sum } from "../core/sum";

describe("sum", () => {
  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
