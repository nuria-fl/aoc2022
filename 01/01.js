const { parseInput } = require("../parseInput");

function sortedCaloriesByElf(input) {
  const data = parseInput(input).map((i) => (i ? parseInt(i, 10) : null));
  const caloriesByElf = [];
  let sum = 0;

  data.forEach((calories) => {
    if (!calories) {
      caloriesByElf.push(sum);
      sum = 0;
    }
    sum += calories;
  });

  return caloriesByElf.sort((a, b) => b - a);
}

function solveStep1(input) {
  return sortedCaloriesByElf(input)[0];
}

function solveStep2(input) {
  const calories = sortedCaloriesByElf(input);
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += calories[i];
  }
  return sum;
}

module.exports = {
  solveStep1,
  solveStep2,
};
