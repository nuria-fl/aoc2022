const { solveStep1, solveStep2 } = require("./05");
it("first step should return 2", () => {
  const result = solveStep1("/05/05.values-example.txt");

  expect(result).toBe("CMZ");
});

it("second step should return MCD", () => {
  const result = solveStep2("/05/05.values-example.txt");

  expect(result).toBe("MCD");
});
