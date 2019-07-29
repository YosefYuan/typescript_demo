function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((prev, cur) => prev + cur);
}

console.log(add7(1, 2, 3, 4, 5));

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}

console.log(add8(1, 2, 3));
console.log(add8("a", "b", "c"));
