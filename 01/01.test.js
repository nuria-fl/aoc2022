const { solveStep1 } = require("./01");
it("first step should return 24000", () => {
  const result = solveStep1("/01/01.values-example.txt");

  expect(result).toBe(24000);
});
