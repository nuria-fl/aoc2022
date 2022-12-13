const { parseInput } = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).filter((r) => r);
  const items = data.map((rucksack) => {
    rucksack = rucksack.split("");
    const compartmentSize = rucksack.length / 2;
    const compartments = [
      rucksack.slice(0, compartmentSize),
      rucksack.slice(compartmentSize),
    ];
    return compartments[0].find((item) => {
      return compartments[1].includes(item);
    });
  });

  return items.reduce((prev, curr) => {
    const value = parseInt(curr, 36) - 9 + prev;

    if (curr === curr.toUpperCase()) {
      return value + 26;
    }

    return value;
  }, 0);
}

function solveStep2(input) {
  const data = parseInput(input)
    .filter((r) => r)
    .map((rucksack) => {
      return rucksack.split("");
    });
  const items = [];

  for (let i = 0; i < data.length - 2; i += 3) {
    const item = data[i].find((item) => {
      return data[i + 1].includes(item) && data[i + 2].includes(item);
    });
    items.push(item);
  }

  return items.reduce((prev, curr) => {
    const value = parseInt(curr, 36) - 9 + prev;

    if (curr === curr.toUpperCase()) {
      return value + 26;
    }

    return value;
  }, 0);
}

module.exports = {
  solveStep1,
  solveStep2,
};
