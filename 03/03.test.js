const { solveStep1, solveStep2 } = require("./03");
it("first step should return 157", () => {
  const result = solveStep1("/03/03.values-example.txt");

  expect(result).toBe(157);
});

it("second step should return 70", () => {
  const result = solveStep2("/03/03.values-example.txt");

  expect(result).toBe(70);
});
