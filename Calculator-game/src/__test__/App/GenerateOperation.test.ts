import { describe, expect, it, vi } from "vitest";
import GenerateOperation from "@/app/GenerateOperation.ts";
import { OperationsSign } from "@/app/RandomOperations.ts";
import MathOperation from "@/app/MathOperation.ts";
describe("GenerateOperation", () => {
  it("getRandomCalCulation", () => {
    vi.spyOn(GenerateOperation as any, "threeNumbers").mockImplementationOnce(
      () => ({
        oneNumber: 1,
        twoNumber: 2,
        threeNumber: 3,
      })
    );
    vi.spyOn(
      GenerateOperation as any,
      "calculateThreeNumber"
    ).mockImplementationOnce(() => ({
      operations: [OperationsSign.ADD, OperationsSign.ADD],
      result: 6,
    }));

    let actual = GenerateOperation.getRandomCalCulation();
    let expected = new MathOperation(
      1,
      2,
      3,
      OperationsSign.ADD,
      OperationsSign.ADD,
      6
    );
    expect(actual.equalTo(expected)).toBe(true);
  });
});
