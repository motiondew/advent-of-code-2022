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

  const highestNumberOfCalories = data
    .split("\n\n")
    .map((stringArray, index) => ({ sum: splitAndSum(stringArray), index }))
    .sort((a, b) => a.sum - b.sum)
    .reverse()
    .shift();

  console.log(highestNumberOfCalories.sum);
});
