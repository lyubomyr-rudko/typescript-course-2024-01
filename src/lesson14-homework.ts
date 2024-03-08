// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

export function excerciseA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  function calculateSum(arr: number[] | null): number {
    if (!arr || arr.length <= 1) {
      return 0;
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const total = sortedArr.slice(1, -1).reduce((acc, num) => acc + num, 0);

    return total;
  }

  console.log(calculateSum([6, 2, 1, 8, 10])); //16
  console.log(calculateSum([1, 1, 11, 2, 3])); //6
  console.log(calculateSum(null)); //0
  console.log(calculateSum([])); //0
  console.log(calculateSum([5])); //0

  return calculateSum;
}
excerciseA();

export function excerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  function getSum(arr: number[] | null): number[] {
    if (!arr || arr.length === 0) {
      return [];
    }

    const positivesCount = arr.filter((num) => num > 0).length;
    const negativesSum = arr
      .filter((num) => num < 0)
      .reduce((acc, num) => acc + num, 0);

    return [positivesCount, negativesSum];
  }

  console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[ 10, -65 ]
  return getSum;
}
excerciseB();

export function excerciseC() {
  // Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
  // Notes
  // Array/list size is at least 2 .
  // Array/list's numbers Will be only Positives
  // Repetition of numbers in the array/list could occur.
  // [10,20] return ==> [20,10]
  // [1,2,3,4] return ==> [24,12,8,6]
  // [1,5,2] return ==> [10,2,5]
  // [10,3,5,6,2] return ==> [180,600,360,300,900]
  // implement the funciton avoiding nested loops, with O(N)
  function getProductArr(arr: number[]): number[] {
    const totalProduct = arr.reduce((acc, num) => acc * num, 1);
    return arr.map((num) => totalProduct / num);
  }

  const result1 = getProductArr([10, 20]);
  const result2 = getProductArr([1, 2, 3, 4]);
  const result3 = getProductArr([1, 5, 2]);
  const result4 = getProductArr([10, 3, 5, 6, 2]);

  console.log(result1); //[20,10]
  console.log(result2); //[24,12,8,6]
  console.log(result3); //[10,2,5]
  console.log(result4); //[180,600,360,300,900]

  return getProductArr;
}
excerciseC();

function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:
  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle
  // Thursday - Liskov Substitution Principle
  // Friday - Interface Segregation Principle
  // before
  interface Actor {
    sing(): void;
    dance(): void;
  }

  class Artist implements Actor {
    sing() {
      console.log('Actor is singing');
    }

    dance() {
      console.log('Actor is dancing');
    }
  }

  const artist = new Artist();
  artist.sing();
  artist.dance();

  // after
  interface Singing {
    sing(): void;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Dancing {
    dance(): void;
  }

  class ArtistAfter implements Singing {
    sing() {
      console.log('Actor is singing');
    }
  }

  const artist1 = new ArtistAfter();
  artist1.sing();
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
}
excerciseD();
