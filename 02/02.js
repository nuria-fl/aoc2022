const { parseInput } = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).filter((game) => game);
  let points = 0;
  const pointsByElement = {
    A: 1,
    B: 2,
    C: 3,
  };

  data.forEach((game) => {
    const [elf, me] = game
      .replace("X", "A")
      .replace("Y", "B")
      .replace("Z", "C")
      .split(" ");

    points += pointsByElement[me];

    if (elf === me) {
      // draw
      points += 3;
      return;
    }
    if (
      (elf === "A" && me === "B") ||
      (elf === "B" && me === "C") ||
      (elf === "C" && me === "A")
    ) {
      // win
      points += 6;
      return;
    }
    // lose
  });

  return points;
}

function solveStep2(input) {
  const data = parseInput(input).filter((game) => game);
  let points = 0;
  const pointsByElement = {
    A: 1,
    B: 2,
    C: 3,
  };

  data.forEach((game) => {
    const [elf, scenario] = game.split(" ");
    let me;

    //lose
    if (scenario === "X") {
      switch (elf) {
        case "A":
          me = "C";
          break;
        case "B":
          me = "A";
          break;
        case "C":
          me = "B";
          break;
      }
    }
    if (scenario === "Z") {
      switch (elf) {
        case "A":
          me = "B";
          break;
        case "B":
          me = "C";
          break;
        case "C":
          me = "A";
          break;
      }
      points += 6;
    }
    if (scenario === "Y") {
      me = elf;
      points += 3;
    }
    points += pointsByElement[me];
    return;
  });
  return points;
}

module.exports = {
  solveStep1,
  solveStep2,
};
