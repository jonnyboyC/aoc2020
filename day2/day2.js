const { readFileSync } = require("fs");
const { EOL } = require("os");

const pattern = /(\d+)-(\d+) (\w): (\w+)/;

class PasswordSet {
  constructor(lower, upper, char, password) {
    this.lower = lower;
    this.upper = upper;
    this.char = char;
    this.password = password;
  }

  isValid() {
    const match = this.password.match(new RegExp(this.char, "g"));
    const count = match ? match.length : 0;
    return this.lower <= count && this.upper >= count;
  }

  isValid2() {
    const first = this.password[this.lower - 1] === this.char;
    const second = this.password[this.upper - 1] === this.char;

    return (first ? 1 : 0) + (second ? 1 : 0) === 1;
  }

  static fromLine(line) {
    const results = pattern.exec(line);
    if (!results) {
      console.log(line);
      throw new Error("Invalid pattern");
    }

    return new PasswordSet(
      Number.parseInt(results[1]),
      Number.parseInt(results[2]),
      results[3],
      results[4]
    );
  }
}

const data = readFileSync("input.txt", "utf8");
console.log(
  data
    .split(EOL)
    .map(PasswordSet.fromLine)
    .map((x) => x.isValid2())
    .filter((x) => x).length
);
