// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

function excerciseA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
}
excerciseA();

function excerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
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
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
}
excerciseD();

export {};
