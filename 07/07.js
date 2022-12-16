const { parseInput } = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).filter((c) => c);

  const dirs = {
    "/": {
      size: 0,
      dirs: {},
    },
  };

  let currentDir = null;
  let prevDirs = [];

  data.forEach((line) => {
    if (line.startsWith("$ ls")) {
      return;
    }

    if (line.startsWith("$ cd")) {
      const dirName = line.replace("$ cd ", "");

      if (dirName === "/") {
        currentDir = dirs["/"];
        return;
      }

      if (dirName === "..") {
        currentDir = prevDirs.pop();
        return;
      }
      prevDirs.push(currentDir);
      currentDir = currentDir.dirs[dirName];
      if (!currentDir.dirs[dirName]) {
        currentDir.dirs[dirName] = {
          size: 0,
          dirs: {},
        };
      }
      return;
    }

    if (line.startsWith("dir")) {
      const dirName = line.replace("dir ", "");
      if (!currentDir.dirs[dirName]) {
        currentDir.dirs[dirName] = {
          size: 0,
          dirs: {},
        };
      }
      return;
    }

    currentDir.size += parseInt(line.split(" ")[0], 10);
  });

  function sumSubdirs(dir) {
    const subdirs = Object.values(dir.dirs);
    if (subdirs) {
      subdirs.forEach(sumSubdirs);
      subdirs.forEach((subdir) => (dir.size += subdir.size));
    }
  }

  Object.values(dirs).forEach(sumSubdirs);

  let sum = 0;

  function sumToSize(dir) {
    if (dir.size <= 100000) {
      sum += dir.size;
    }
    Object.values(dir.dirs).forEach(sumToSize);
  }

  sumToSize(dirs["/"]);

  return sum;
}

function solveStep2(input) {
  const data = parseInput(input).filter((c) => c);

  const dirs = {
    "/": {
      size: 0,
      dirs: {},
    },
  };

  let currentDir = null;
  let prevDirs = [];

  data.forEach((line) => {
    if (line.startsWith("$ ls")) {
      return;
    }

    if (line.startsWith("$ cd")) {
      const dirName = line.replace("$ cd ", "");

      if (dirName === "/") {
        currentDir = dirs["/"];
        return;
      }

      if (dirName === "..") {
        currentDir = prevDirs.pop();
        return;
      }
      prevDirs.push(currentDir);
      currentDir = currentDir.dirs[dirName];
      if (!currentDir.dirs[dirName]) {
        currentDir.dirs[dirName] = {
          size: 0,
          dirs: {},
        };
      }
      return;
    }

    if (line.startsWith("dir")) {
      const dirName = line.replace("dir ", "");
      if (!currentDir.dirs[dirName]) {
        currentDir.dirs[dirName] = {
          size: 0,
          dirs: {},
        };
      }
      return;
    }

    currentDir.size += parseInt(line.split(" ")[0], 10);
  });

  function sumSubdirs(dir) {
    const subdirs = Object.values(dir.dirs);
    if (subdirs) {
      subdirs.forEach(sumSubdirs);
      subdirs.forEach((subdir) => (dir.size += subdir.size));
    }
  }

  Object.values(dirs).forEach(sumSubdirs);

  const availableSpace = 70000000;
  const minimumUnusedSpace = 30000000;
  const dirSizes = [];

  function addToSizes(dir) {
    dirSizes.push(dir.size);
    const subdirs = Object.values(dir.dirs);
    subdirs.forEach(addToSizes);
  }

  Object.values(dirs).forEach(addToSizes);

  dirSizes.sort((a, b) => b - a);
  const largestDir = dirSizes.shift();
  const currentAvailableSpace = availableSpace - largestDir;
  const minimumToDelete = minimumUnusedSpace - currentAvailableSpace;

  return dirSizes.reverse().find((size) => size >= minimumToDelete);
}

module.exports = {
  solveStep1,
  solveStep2,
};
