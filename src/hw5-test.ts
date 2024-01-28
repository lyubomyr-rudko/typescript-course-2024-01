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

export async function printMessagesWithTimeout(): Promise<void> {
  async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await delay(1000);
  console.log('1');

  await delay(1000);
  console.log('2');

  await delay(1000);
  console.log('3');
}

export function excerciseB(n: number): Array<number | string> {
  const result: Array<number | string> = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}
excerciseB(5);
