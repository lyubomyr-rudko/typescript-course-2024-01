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
  const arr1 = [6, 2, 1, 8, 10];
  const arr2 = [1, 1, 11, 2, 3];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arr3: any[] = [];
  const arr4 = [1];
  function summNumbers(arr: number[]) {
    let res = 0;

    if (arr == null || arr.length == 1 || arr == undefined) {
      res = 0;
    } else {
      const sortArr = arr.sort(function (a: number, b: number) {
        return a - b;
      });
      for (let i = 1; i < sortArr.length - 1; i++) {
        res += sortArr[i];
      }
    }
    console.log(res);
    return res;
  }
  summNumbers(arr1);
  summNumbers(arr2);
  summNumbers(arr3);
  summNumbers(arr4);
  return { summNumbers };
}
excerciseA();

export function excerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  const arr2: number[] = [];
  function countArray(arr: number[] | null) {
    let count = 0;
    let sum = 0;
    let res: number[] = [];

    if (arr == null || arr.length == 0) {
      res = [];
    } else {
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
          count++;
        }
        if (arr[i] < 0) {
          sum += arr[i];
        }
      }
      res.push(count);
      res.push(sum);
    }
    console.log(res);
    return res;
  }
  countArray(arr);
  countArray(arr2);
  countArray(null);
  return { countArray };
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class User {
    name: string;
    age: number;
    logs: string[];
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.logs = [];
    }

    setName(name: string) {
      this.name = name;
      this.logs.push('Edited user name');
    }

    setAge(age: number) {
      this.age = age;
      this.logs.push('Edited user age');
    }
  }
  // Tuesday - Single responsibility principle
  //   Now we have two classes with different responsibilities:

  // User class: Manage only what is directly related to user data (editing name and age).
  // UserLogProxy: Manage user activity logs only.

  class User2 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    setName(name: string) {
      this.name = name;
    }

    setAge(age: number) {
      this.age = age;
    }
  }
  class UserLogProxy {
    logs: string[];
    constructor() {
      this.logs = [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(target: any, propKey: any, receiver: any) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const UserLogScope = this;

      if (propKey === 'logs') {
        return {
          get: () => this.getLogs(),
        };
      }

      const targetValue = Reflect.get(target, propKey, receiver);

      if (typeof targetValue === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (...args: any) => {
          UserLogScope.add(`Edited user ${propKey.replace('set', '')}`);

          return targetValue.bind(this, args);
        };
      } else {
        return targetValue;
      }
    }

    getLogs() {
      return this.logs;
    }

    add(message: string) {
      this.logs.push(message);
    }
  }
  const run = () => {
    const UserInstanceWithLogs = new Proxy(
      new User2('Ricardo', 32),
      new UserLogProxy(),
    );

    UserInstanceWithLogs.setAge(33);
    UserInstanceWithLogs.setName('Ricardo Luz');
    console.log(UserInstanceWithLogs.logs.get());
  };
  run();
}

excerciseD();

// export {};
