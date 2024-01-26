// import { add } from '@user-name/test-npm-package';

export function getRandomItem<T>(arr: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

export function chunk<T>(array: Array<T>, size: number) {
  const chunkedArray: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
