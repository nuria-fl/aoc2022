const { solveStep1, solveStep2 } = require("./06");
describe("first step", () => {
  it("example 1 should be 7", () => {
    const result = solveStep1("mjqjpqmgbljsphdztnvjfqwrcgsmlb");

    expect(result).toBe(7);
  });
  it("example 2 should be 5", () => {
    const result = solveStep1("bvwbjplbgvbhsrlpgdmjqwftvncz");

    expect(result).toBe(5);
  });
  it("example 3 should be 6", () => {
    const result = solveStep1("nppdvjthqldpwncqszvftbrmjlhg");

    expect(result).toBe(6);
  });
  it("example 4 should be 10", () => {
    const result = solveStep1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg");

    expect(result).toBe(10);
  });
  it("example 5 should be 11", () => {
    const result = solveStep1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw");

    expect(result).toBe(11);
  });
});

describe("second step", () => {
  it("example 1 should be 19", () => {
    const result = solveStep2("mjqjpqmgbljsphdztnvjfqwrcgsmlb");

    expect(result).toBe(19);
  });
  it("example 2 should be 23", () => {
    const result = solveStep2("bvwbjplbgvbhsrlpgdmjqwftvncz");

    expect(result).toBe(23);
  });
  it("example 3 should be 23", () => {
    const result = solveStep2("nppdvjthqldpwncqszvftbrmjlhg");

    expect(result).toBe(23);
  });
  it("example 4 should be 29", () => {
    const result = solveStep2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg");

    expect(result).toBe(29);
  });
  it("example 5 should be 26", () => {
    const result = solveStep2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw");

    expect(result).toBe(26);
  });
});
