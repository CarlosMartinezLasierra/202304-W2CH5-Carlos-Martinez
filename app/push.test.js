import { arrayPush } from "./push.js";
test("Add a element to a array", () => {
  const result = arrayPush(["hola", "mundo"], "!");
  expect(result).toEqual(["hola", "mundo", "!"]);
});
test("Test new array longitude", () => {
  const result = arrayPush(["hola"], "mundo");
  expect(result.length).toBe(2);
});
