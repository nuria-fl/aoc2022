const { solveStep1, solveStep2 } = require("./07");
describe("first step", () => {
  it("example 1 should be 7", () => {
    const result = solveStep1("/07/07.values-example.txt");

    expect(result).toBe(95437);
  });
});

describe("second step", () => {
  it("example 1 should be 24933642", () => {
    const result = solveStep2("/07/07.values-example.txt");

    expect(result).toBe(24933642);
  });
});
