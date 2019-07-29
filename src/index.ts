function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((prev, cur) => prev + cur);
}

console.log(add7(1, 2, 3, 4, 5));
