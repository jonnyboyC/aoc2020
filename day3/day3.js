const { readFileSync } = require("fs");
const { EOL } = require("os");

const TREE = "#";
const NOT_TREE = ".";

function toTreeGrid(data) {
  return data.split(EOL).map((row) => {
    const columns = [];
    for (const spot of row) {
      columns.push(TREE === spot ? 1 : 0);
    }
    return columns;
  });
}

function checkSlope(grid, vertical, horizontal) {
  const width = grid[0].length;

  let hIdx = 0;
  let trees = 0;

  for (let vIdx = 0; vIdx < grid.length; vIdx += vertical) {
    const row = grid[vIdx];
    trees += row[hIdx % width];
    hIdx += horizontal;
  }

  return trees;
}

const option = (horizontal, vertical) => ({ vertical, horizontal });

const data = readFileSync("input.txt", "utf8");
const grid = toTreeGrid(data);

const options = [
  option(1, 1),
  option(3, 1),
  option(5, 1),
  option(7, 1),
  option(1, 2),
];

console.log(
  options
    .map(({ horizontal, vertical }) => checkSlope(grid, vertical, horizontal))
    .reduce((acc, curr) => acc * curr, 1)
);
