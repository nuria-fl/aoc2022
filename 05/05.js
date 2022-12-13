const { parseInputToString } = require("../parseInput");

function findEmptyPosition(stack) {
  const emptyPosition = [...stack].reverse().findIndex((c) => !c);

  if (emptyPosition < 0) {
    return null;
  }
  return stack.length - 1 - emptyPosition;
}

function solveStep1(input) {
  const data = parseInputToString(input).split("\n");
  const divider = data.findIndex((v) => v === "");
  const stacksRows = data.slice(0, divider);

  const moves = data.slice(divider + 1).map((move) => {
    return move
      .replace("move ", "")
      .replace(" from ", " ")
      .replace(" to ", " ")
      .split(" ");
  });
  const stacksAmount = parseInt(
    stacksRows[stacksRows.length - 1].trim().split(" ").pop(),
    10
  );
  const stacks = new Array(stacksAmount).fill(undefined);

  stacksRows.pop();
  stacksRows.forEach((row) => {
    let iteration = 0;
    for (let i = 0; i < row.length; i += 4) {
      if (!stacks[iteration]) {
        stacks[iteration] = [row.slice(i, i + 3).trim()];
      } else {
        stacks[iteration].push(row.slice(i, i + 3).trim());
      }
      iteration++;
    }
  });

  moves.forEach(([amount, from, to]) => {
    if (!amount) return;
    for (let i = 0; i < amount; i++) {
      const fromStack = stacks[from - 1];
      const toStack = stacks[to - 1];
      const cratePosition = fromStack.findIndex((crate) => crate);

      const crateToPosition = findEmptyPosition(toStack);

      if (crateToPosition !== null) {
        toStack[crateToPosition] = fromStack[cratePosition];
      } else {
        toStack.unshift(fromStack[cratePosition]);
      }
      fromStack[cratePosition] = "";
    }
  });

  return stacks
    .map((stack) => stack.find((c) => c).replace(/\[|]/g, ""))
    .join("");
}

function solveStep2(input) {}

module.exports = {
  solveStep1,
  solveStep2,
};
