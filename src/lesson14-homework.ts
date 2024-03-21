// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

function excerciseAAA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  function getSumOfElements(nums: number[]): number {
    return nums.reduce((accumulator, item) => accumulator + item, 0);
  }

  function getIndexesOfExtremeElements(nums: number[]): number[] {
    const minIndex = nums.indexOf(Math.min(...nums));
    const maxIndex = nums.indexOf(Math.max(...nums));

    return [maxIndex, minIndex];
  }

  function sumExcludingExtremeElements(nums?: number[] | null): number {
    if (!nums || nums.length <= 1) {
      return 0;
    }

    const extremeIndexes = getIndexesOfExtremeElements(nums);

    extremeIndexes.forEach((index) => {
      nums.splice(index, 1);
    });

    return getSumOfElements(nums);
  }

  // Приклади використання функцій з консольними виводами
  const result1 = [6, 2, 1, 8, 10];
  console.log('Sum excluding extremes:', sumExcludingExtremeElements(result1));
  const result2 = [1, 1, 11, 2, 3];
  console.log('Sum excluding extremes:', sumExcludingExtremeElements(result2));
}
excerciseAAA();

console.log('excerciseBBB');
function excerciseBBB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  function countPositivesSumNegatives(input: number[]): number[] {
    if (!input || input.length === 0) {
      return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (const num of input) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeSum += num;
      }
    }

    return [positiveCount, negativeSum];
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  console.log(countPositivesSumNegatives(arr));
}
excerciseBBB();

console.log('excerciseC');
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
  function arrayIntegers(arr: number[]): number[] {
    const multiplication = arr.reduce((acum, curr) => acum * curr);
    const result = arr.map((el) => multiplication / el);
    return result;
  }
  console.log(arrayIntegers([10, 3, 5, 6, 2]));
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
  class ProductService {
    private productRepository: ProductRepository;

    constructor() {
      this.productRepository = new ProductRepository();
    }

    getProducts() {
      return this.productRepository.getAllProducts();
    }
  }

  class ProductRepository {
    getAllProducts() {
      return [
        {
          name: 'apple',
          price: 25,
        },
      ];
    }
  }
  const productService = new ProductService();
  console.log(productService.getProducts());

  class ProductService2 {
    constructor(private productRepository2: ProductRepository2) {
      this.productRepository2 = productRepository2;
    }

    getProducts() {
      return this.productRepository2.getAllProducts();
    }
  }

  class ProductRepository2 {
    getAllProducts() {
      return [
        {
          name: 'apple',
          price: 25,
        },
      ];
    }
  }

  const productRepository2 = new ProductRepository2();
  const productService2 = new ProductService2(productRepository2);
  console.log(productService2.getProducts());
}
excerciseD();
