const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // A : rock 1 point
  // B : paper 2 points
  // C : scissors 3 points

  // X : rock
  // Y : paper
  // Z : scissors

  // win   : 6 points
  // draw  : 3 points
  // loss  : 0 points

  const outcomesDictionary = {
    AX: 4,
    AY: 8,
    AZ: 3,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 7,
    CY: 2,
    CZ: 6,
  };

  const score = data
    .split("\n")
    .map((tuple) => tuple.split(" ").join(""))
    .map((key) => outcomesDictionary[key])
    .reduce((acc, cv) => acc + cv, 0);

  console.log(`Part 1 answer ${score}`);

  // A : rock 1 point
  // B : paper 2 points
  // C : scissors 3 points

  // X : loss
  // Y : draw
  // Z : win

  const secondDictionary = {
    AX: 3,
    AY: 4,
    AZ: 8,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 2,
    CY: 6,
    CZ: 7,
  };

  const score2 = data
  .split("\n")
  .map((tuple) => tuple.split(" ").join(""))
  .map((key) => secondDictionary[key])
  .reduce((acc, cv) => acc + cv, 0);

console.log(`Part 1 answer ${score2}`);

});
