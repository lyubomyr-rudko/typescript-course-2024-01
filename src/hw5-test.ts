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

type TMove = 'rock' | 'paper' | 'scissors';

export function rockPaperSizorsVins(me: TMove, other: TMove) {
  if (me === 'rock' && other === 'paper') {
    return false;
  } else if (me === 'paper' && other === 'scissors') {
    return false;
  } else if (me === 'scissors' && other === 'rock') {
    return false;
  }

  return true;
}

console.log(rockPaperSizorsVins('rock', 'paper'));
console.log(rockPaperSizorsVins('paper', 'scissors'));
console.log(rockPaperSizorsVins('scissors', 'rock'));
console.log(rockPaperSizorsVins('rock', 'scissors'));
