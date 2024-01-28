export function padLeft(value: string, n: number | string) {
  if (typeof n === 'number') {
    return ' '.repeat(n) + value;
  } else {
    return n + value;
  }
}

console.log(padLeft('hello', 4));
console.log(padLeft('hello', 'abc'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
console.log(padLeft('hello', true));
