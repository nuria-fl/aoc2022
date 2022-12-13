const { parseInput } = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).filter((i) => i);
  let uselessPairs = 0;

  data.forEach((pair) => {
    const [elf1Start, elf1End, elf2Start, elf2End] = pair
      .split(",")
      .map((e) => e.split("-").map((n) => parseInt(n, 10)))
      .flat();

    if (
      (elf2Start <= elf1Start && elf2End >= elf1End) ||
      (elf1Start <= elf2Start && elf1End >= elf2End)
    ) {
      uselessPairs++;
    }
  });

  return uselessPairs;
}

function solveStep2(input) {
  const data = parseInput(input).filter((i) => i);
  let overlappingPairs = 0;

  data.forEach((pair) => {
    const [elf1Start, elf1End, elf2Start, elf2End] = pair
      .split(",")
      .map((e) => e.split("-").map((n) => parseInt(n, 10)))
      .flat();

    if (elf1End < elf2Start || elf2End < elf1Start) {
      // no overlap
      return;
    }
    overlappingPairs++;
  });

  return overlappingPairs;
}

module.exports = {
  solveStep1,
  solveStep2,
};
