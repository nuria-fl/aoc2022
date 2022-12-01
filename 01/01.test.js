const { solveStep1, solveStep2 } = require("./01");
it("first step should return 24000", () => {
  const result = solveStep1("/01/01.values-example.txt");

  expect(result).toBe(24000);
});

it("second step should return 45000", () => {
  const result = solveStep2("/01/01.values-example.txt");

  expect(result).toBe(45000);
});
