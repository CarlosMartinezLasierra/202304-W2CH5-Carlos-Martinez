import { arrayLength } from "./length.js";

describe("given a length function", () => {
  describe("when it receives juan lucas and fernando", () => {
    test("then it should return 3", () => {
      const expectedResult = 3;
      const result = arrayLength("juan", "lucas", "fernando");
      expect(result).toBe(expectedResult);
    });
  });
});
