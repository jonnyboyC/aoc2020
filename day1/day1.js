const fs = require("fs");
const file = fs.readFileSync("input.txt", "utf8");
const data = file.split("\n").map(Number.parseInt);

if (!Array.isArray(data)) {
  process.exit(1);
}

for (const x of data) {
  for (const y of data) {
    for (const z of data) {
      if (x + y + z === 2020) {
        console.log(x * y * z);
        process.exit(0);
      }
    }
  }
}

// const less = [];
// const greater = [];

// for (const x of data) {
//   if (x < MID_POINT) {
//     less.push(x);
//   } else if (x > MID_POINT) {
//     greater.push(x);
//   }
// }
