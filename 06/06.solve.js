const { parseInputToString } = require("../parseInput");
const { solveStep1, solveStep2 } = require("./06");

console.log(solveStep1(parseInputToString("/06/06.values.txt")));
console.log(solveStep2(parseInputToString("/06/06.values.txt")));
