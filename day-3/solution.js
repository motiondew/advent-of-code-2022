const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const sumOfPriorities = data
    .split("\n")
    .map((rucksack) => [
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2, rucksack.length),
    ])
    .map(([first, second]) => [first.split(""), second.split("")])
    .map(([first, second]) =>
      first.filter((character) => second.includes(character))
    )
    .map((intersection) => [...new Set(intersection)])
    .map(([shared]) => {
      const charCode = shared.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        return charCode - 38;
      } else if (charCode >= 97 && charCode <= 122) {
        return charCode - 96;
      }
    })
    .reduce((acc, cv) => acc + cv, 0);

  console.log(`Part 1 solution: ${sumOfPriorities}`);

  const sumOfGroupPriorities = data
    .split("\n")
    .reduce(
      (acc, element, index) =>
        (index % 3 ? acc[acc.length - 1].push(element) : acc.push([element])) &&
        acc,
      []
    )
    .map(([first, second, third]) => [
      first.split(""),
      second.split(""),
      third.split(""),
    ])
    .map(([first, second, third]) => {
      const firstAndSecondIntersection = first.filter((element) =>
        second.includes(element)
      );
      return firstAndSecondIntersection.filter((element) =>
        third.includes(element)
      );
    })
    .map((intersection) => [...new Set(intersection)])
    .map(([shared]) => {
      const charCode = shared.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        return charCode - 38;
      } else if (charCode >= 97 && charCode <= 122) {
        return charCode - 96;
      }
    })
    .reduce((acc, cv) => acc + cv, 0);

  console.log(`Part 2 solution ${sumOfGroupPriorities}`);
});
