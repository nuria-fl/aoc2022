const { solveStep1, solveStep2 } = require("./04");
it("first step should return 2", () => {
  const result = solveStep1("/04/04.values-example.txt");

  expect(result).toBe(2);
});

it("second step should return 4", () => {
  const result = solveStep2("/04/04.values-example.txt");

  expect(result).toBe(4);
});
