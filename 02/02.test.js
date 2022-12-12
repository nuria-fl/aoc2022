const { solveStep1, solveStep2 } = require("./02");
it("first step should return 15", () => {
  const result = solveStep1("/02/02.values-example.txt");

  expect(result).toBe(15);
});

it("second step should return 12", () => {
  const result = solveStep2("/02/02.values-example.txt");

  expect(result).toBe(12);
});
