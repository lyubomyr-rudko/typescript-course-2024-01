// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

export function excerciseA(arr: number[]): number {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  return [...arr]
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, value) => acc + value, 0);
}
console.log(excerciseA([6, 2, 1, 8, 10]));

export function excerciseB(arr: number[]): number[] {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  let positiveCount = 0;
  let negativeSum = 0;

  arr.forEach((value) => {
    value > 0 ? positiveCount++ : (negativeSum += value);
  });

  return arr.length ? [positiveCount, negativeSum] : [];
}
console.log(
  excerciseB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
);

export function excerciseC(arr: number[]): number[] {
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
  if (arr.length < 2) {
    throw new Error('Array size must be at least 2.');
  }

  if (arr.some((num) => num <= 0)) {
    throw new Error('Array elements must be positive numbers.');
  }

  const n = arr.length;
  const leftProduct = new Array(n).fill(1);
  const rightProduct = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    leftProduct[i] = leftProduct[i - 1] * arr[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * arr[i + 1];
  }

  const productArray: number[] = [];
  for (let i = 0; i < n; i++) {
    productArray[i] = leftProduct[i] * rightProduct[i];
  }

  return productArray;
}
console.log(excerciseC([10, 3, 5, 6, 2]));

function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:
  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle
  // Thursday - Liskov Substitution Principle
  // Friday - Interface Segregation Principle
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
  function withoutOpenClosed() {
    class GetDate {
      getDate() {
        return new Date();
      }

      // change return to ISOString causes errors in logic ShowDate
      // getDate() {
      //   return new Date().toISOString();
      // }
    }

    class ShowDate {
      dayMs = 1000 * 60 * 60 * 24;
      // there we should implement abstraction instead of class implementation
      // if we gonna change getDate method in GetDate class, we have to change logic within this class
      constructor(private readonly dateGetter: GetDate) {}

      private calculateDays(date1: Date, date2: Date) {
        return Math.floor((Number(date1) - Number(date2)) / this.dayMs);
      }

      private getDaysLeftForNewYear() {
        const newYear = new Date(2025, 0, 1);
        const currentDate = this.dateGetter.getDate();
        return this.calculateDays(newYear, currentDate);
      }

      private getDaysLeftForSummer() {
        const summer = new Date(2024, 5, 1);
        const currentDate = this.dateGetter.getDate();
        return this.calculateDays(summer, currentDate);
      }

      showDaysLeft() {
        console.log('Days left for New Year:', this.getDaysLeftForNewYear());
        console.log('Days left for Summer:', this.getDaysLeftForSummer());
      }
    }

    const showDate = new ShowDate(new GetDate());
    showDate.showDaysLeft();
  }
  withoutOpenClosed();

  function withOpenClosed() {
    interface IDateGetter {
      getDate(): Date;
    }

    class GetDate {
      getDate() {
        return new Date();
      }

      // now we can extend some logic in this class and not cause issues in ShowDate
      getISODate() {
        return new Date().toISOString();
      }
    }

    class ShowDate {
      dayMs = 1000 * 60 * 60 * 24;
      // now we implement abstraction which 100% has method gerDate that return Date
      constructor(private readonly dateGetter: IDateGetter) {}

      private calculateDays(date1: Date, date2: Date) {
        return Math.floor((Number(date1) - Number(date2)) / this.dayMs);
      }

      private getDaysLeftForNewYear() {
        const newYear = new Date(2025, 0, 1);
        const currentDate = this.dateGetter.getDate();
        return this.calculateDays(newYear, currentDate);
      }

      private getDaysLeftForSummer() {
        const summer = new Date(2024, 5, 1);
        const currentDate = this.dateGetter.getDate();
        return this.calculateDays(summer, currentDate);
      }

      showDaysLeft() {
        console.log('Days left for New Year:', this.getDaysLeftForNewYear());
        console.log('Days left for Summer:', this.getDaysLeftForSummer());
      }
    }

    const showDate = new ShowDate(new GetDate());
    showDate.showDaysLeft();
  }
  withOpenClosed();
}
excerciseD();

export {};
