function solveStep1(input) {
  const data = input.split("");
  for (let i = 3; i < data.length; i++) {
    let last4Characters = data.slice(i - 3, i + 1);
    if (
      !last4Characters.some((c, idx) => {
        const arr = [...last4Characters];
        arr.splice(idx, 1);
        return arr.includes(c);
      })
    ) {
      return i + 1;
    }
  }
}

function solveStep2(input) {
  const data = input.split("");
  for (let i = 13; i < data.length; i++) {
    let last14Characters = data.slice(i - 13, i + 1);
    if (
      !last14Characters.some((c, idx) => {
        const arr = [...last14Characters];
        arr.splice(idx, 1);
        return arr.includes(c);
      })
    ) {
      return i + 1;
    }
  }
}

module.exports = {
  solveStep1,
  solveStep2,
};
