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
  function getSum(elements: number[]): number {
    return elements.reduce((acum, item) => acum + item);
  }

  function getExcludedElements(elements: number[]): number[] {
    const minValueIndex = elements.indexOf(Math.min(...elements));
    const maxValueIndex = elements.indexOf(Math.max(...elements));

    return [maxValueIndex, minValueIndex];
  }

  function cqList(elements?: number[] | null): number {
    if (elements && elements.length > 1) {
      const excludedElements = getExcludedElements(elements);

      excludedElements.forEach((index) => {
        elements.splice(index, 1);
      });

      return getSum(elements);
    }

    return 0;
  }

  return { cqList };
}
excerciseA();

export function excerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  function countElements(array: number[] | null): number[] {
    if (array && array.length > 0) {
      let positiveNumbersCount = 0;
      let negativeNumbersSum = 0;

      array.forEach((item) => {
        if (item > 0) {
          positiveNumbersCount++;
        } else {
          negativeNumbersSum += item;
        }
      });

      return [positiveNumbersCount, negativeNumbersSum];
    }

    return [];
  }

  console.log(
    countElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
  );

  return { countElements };
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
  // 1800;

  // implement the funciton avoiding nested loops, with O(N)
  function productArrayConstructor(array: number[]): number[] {
    const arrayMultiplication = array.reduce((acum, item) => acum * item);
    const result = array.map((item) => arrayMultiplication / item);

    return result;
  }

  console.log(productArrayConstructor([1, 2, 3, 4]));

  return { productArrayConstructor };
}
excerciseC();

function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:
  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle
  // Thursday - Liskov Substitution Principle

  // ++Friday - Interface Segregation Principle
  // цей принцип заключається у розділенні інтерфейсу на менші та більш специфічні інтерфейси, ніж один великий, в якому буде намішане усе підряд

  // Приклад 1:
  // without Interface Segregation Principle
  interface IIncorrectUser {
    name: string;
    domain: string;
    age: number;
    gender: string;
    university: string;
  }

  const incorrectUser: IIncorrectUser = {
    name: 'Sarah',
    domain: 'none',
    age: 11,
    gender: 'female',
    university: 'none',
  };

  console.log('incorrectUser-->', incorrectUser);

  // with Interface Segregation Principle
  interface IUserWithDomain {
    domain: string;
  }

  interface IUserWithUniversity {
    university: string;
  }

  interface IUser1 extends IUserWithDomain {
    name: string;
    age: number;
    gender: string;
  }

  interface IUser2 extends IUserWithUniversity {
    name: string;
    age: number;
    gender: string;
  }

  const user1: IUser1 = {
    name: 'Alex',
    age: 22,
    gender: 'male',
    domain: 'a.domain',
  };

  const user2: IUser2 = {
    name: 'John',
    age: 18,
    gender: 'male',
    university: 'university',
  };

  console.log('user1-->', user1);
  console.log('user2-->', user2);

  // Приклад 2:
  interface IAnimal {
    walk(): void;
    fly(): void;
  }

  class Dog implements IAnimal {
    walk() {
      console.log('dog walking');
    }

    // мінус в тому, що в цьому місці нам треба прописувати цей метод, бо він є в IAnimal.
    // вирішити це можна таким чином, що в нас буде окремо інтерфейс з методом walk, і окремо з fly
    fly() {
      throw new Error('dogs can not fly');
    }
  }

  const dog1 = new Dog();
  dog1.walk();

  class Bird implements IAnimal {
    walk() {
      console.log('bird walking');
    }

    fly() {
      console.log('bird flying');
    }
  }

  const bird1 = new Bird();
  bird1.fly();

  // Рішення:
  interface IWalk {
    walk(): void;
  }

  interface IFly {
    fly(): void;
  }

  class Dog2 implements IWalk {
    walk() {
      console.log('dog walking');
    }
  }

  const dog2 = new Dog2();
  dog2.walk();

  class Bird2 implements IWalk, IFly {
    walk() {
      console.log('bird walking');
    }

    fly() {
      console.log('bird flying');
    }
  }

  const bird2 = new Bird2();
  bird2.fly();

  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
}
excerciseD();

export {};
