let multiply: (first: number, second: number) => number;
multiply = (first, second) => first * second;

let multiplyCurried: (first: number) => (second: number) => number;
multiplyCurried = first => second => first * second;

console.log(multiply(5, 2)); // '10'
console.log(multiplyCurried(9)(2)); // '18'
