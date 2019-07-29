function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, next) => pre + next);
}
add7(1, 2, 3, 4, 5);
