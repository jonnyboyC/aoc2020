const fs = require("fs");
const file = fs.readFileSync("data.json", "utf8");
const data = JSON.parse(file);

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
