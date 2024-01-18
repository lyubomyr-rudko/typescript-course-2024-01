function dist1([x1, y1]: [number, number], [x2, y2]: [number, number]): number {
  type TPoint = [number, number];

  const point1: TPoint = [x1, y1];
  const point2: TPoint = [x2, y2];

  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
  const calculateDistance: DistanceFunction = ([x1, y1], [x2, y2]) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));

  const result = calculateDistance(point1, point2);
  console.log(`Distance between (${x1}, ${y1}) and (${x2}, ${y2}): ${result}`);
  return result;
}

export { dist1 };

function dist2(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
): number {
  type TPoint = { x: number; y: number };
  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;

  const distance: DistanceFunction = (p1, p2) => {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const result = distance(p1, p2);
  console.log(
    `Distance between (${p1.x},${p1.y}) and (${p2.x},${p2.y}): ${result}`,
  );
  return result;
}
export { dist2 };

// TODO: create a function which takes any string and returns the string reversed
function exerciseA(inputString: string): string {
  return inputString.split('').reverse().join('');
}
console.log(exerciseA('hello'));

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function exerciseB(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(exerciseB(numbers));

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function exerciseC(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

const numbersForExerciseC = [1, 2, 3, 4, 5];
console.log(exerciseC(numbersForExerciseC));

// TODO: create a function which takes an array of strings and returns the longest string
function exerciseD(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }

  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    strings[0],
  );
}
const strings = ['apple', 'banana', 'kiwi', 'strawberry'];
console.log(exerciseD(strings));

export { exerciseA, exerciseB, exerciseC, exerciseD };
