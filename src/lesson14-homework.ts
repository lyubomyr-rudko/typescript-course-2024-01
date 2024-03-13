// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

export function excerciseA(arr: number[]): number  {


function excerciseA() {

  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


    if (!arr || arr.length <= 1) return 0;

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const sum = sortedArr.slice(1, -1).reduce((acc, curr) => acc + curr, 0);

    return sum;
}
// excerciseA();
console.log(excerciseA([6, 2, 1, 8, 10])); // Output: 16
console.log(excerciseA([1, 1, 11, 2, 3])); // Output: 6
console.log(excerciseA([])); // Output: 0
console.log(excerciseA([5])); // Output: 0

export function excerciseB(arr: number[]): [number, number] {

}
excerciseA();

function excerciseB() {

  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


    if (!arr || arr.length === 0) {
        return [0, 0];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let num of arr) {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeSum += num;
        }
    }

    return [positiveCount, negativeSum];
}
// excerciseB();
console.log(excerciseB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // Output: [10, -65]


export function excerciseC(arr: number[]): number[] {

}
excerciseB();

function excerciseC() {

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


    if (!arr || arr.length < 2) {
        return [];
    }

    const productArray: number[] = [];
    let productSoFar: number = 1;

    for (let i = 0; i < arr.length; i++) {
        productArray[i] = productSoFar;
        productSoFar *= arr[i];
    }

    productSoFar = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        productArray[i] *= productSoFar;
        productSoFar *= arr[i];
    }

    return productArray;


}
// excerciseC();
console.log(excerciseC([10, 20])); // [20, 10]
console.log(excerciseC([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(excerciseC([1, 5, 2])); // [10, 2, 5]
console.log(excerciseC([10, 3, 5, 6, 2])); // [180, 600, 360, 300, 900]

}
excerciseC();


function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:

  // Friday - Interface Segregation Principle

    // before
    interface Worker {
        work(): void;
        takeBreak(): void;
    }

    class Manager implements Worker {
        work() {
            console.log("Менеджер работает");
        }

        takeBreak() {
            console.log("Менеджер принимает перерыв");
        }
    }

    const manager = new Manager();
    manager.work();
    manager.takeBreak();

    // after
    interface Workable {
        work(): void;
    }

    interface Breakable {
        takeBreak(): void;
    }

    class ManagerAfter implements Workable {
        work() {
            console.log("Менеджер работает");
        }
    }

    const manager1 = new ManagerAfter();
    manager1.work();

  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle
  // Thursday - Liskov Substitution Principle
  // Friday - Interface Segregation Principle
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.

}
excerciseD();

export {};
