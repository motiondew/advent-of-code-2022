const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const splitAndSum = (stringArray) =>
    stringArray
      .split("\n")
      .reduce((acc, currentValue) => acc + parseInt(currentValue), 0);

  const highestNumberOfCaloriesOfThree = data
    .split("\n\n")
    .map((stringArray, index) => ({ sum: splitAndSum(stringArray), index }))
    .sort((a, b) => a.sum - b.sum)
    .reverse()
    .slice(0, 3)
    .reduce((acc, cv) => acc + cv.sum, 0)

  console.log(highestNumberOfCaloriesOfThree);
});
