/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: add unit tests for exerciseA, exerciseB, exerciseC tasks
// TODO: read exerciseD and plan in advance which SOLID principle you will use for your homework

function exerciseA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index!).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
}
exerciseA();
export function sumArray(array: number[]) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a: number, b: number) {
      return a - b;
    });

    let total = 0;

    for (let i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));

function exerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
}
exerciseB();
export function count(input: number[]) {
  let positiveNum = 0;
  let negativeNum = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positiveNum++ : (negativeNum += num)));
  }
  return [positiveNum, negativeNum];
}
console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

function exerciseC() {
  // Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
  // Notes
  // Array/list size is at least 2 .
  // Array/list's numbers Will be only Positives
  // Repetition of numbers in the array/list could occur.
  // [10,20] return ==> [20,10]
  // [1,2,3,4] return ==> [24,12,8,6]
  // [1,5,2] return ==> [10,2,5]
  // [10,3,5,6,2] return ==> [180,600,360,300,900]
  // implement the function avoiding nested loops, with O(N)
}
exerciseC();
export function arrayIntegers(arr: number[]): number[] {
  const multiplication = arr.reduce((acum, curr) => acum * curr);

  return arr.map((el) => multiplication / el);
}
console.log(arrayIntegers([10, 3, 5, 6, 2]));

function exerciseD() {
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
  abstract class CustomError {
    error: Error;
    // eslint-disable-next-line
    // @ts-expect-error
    errorMessage: string;
    protected constructor(error: Error) {
      this.error = error;
    }
    abstract createErrorMessage(): void;
    abstract logError(): void;
  }

  class ConnectionError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `Connection error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
  }

  class AlertSystem {
    public sendAlert(message: string) {
      console.log('Alert sent');
    }
  }

  class DBError extends CustomError {
    constructor(error: Error) {
      super(error);
    }

    createErrorMessage(): void {
      this.errorMessage = `DB error: ${this.error.message}`;
    }

    logError(): void {
      console.log(this.errorMessage);
      const alert = new AlertSystem();
      alert.sendAlert(this.errorMessage);
    }
  }

  const errorDecorator = (customError: CustomError) => {
    customError.createErrorMessage();
    customError.logError();
  };

  const main = () => {
    const dbError = new DBError(new Error('DB err1'));
    errorDecorator(dbError);
  };

  main();
}
exerciseD();

export {};
