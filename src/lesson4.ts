import chunk from 'lodash/chunk';
// import { sum } from '@lyubomyr.rudko/demo';

// console.log(sum(1, 2, 3, 4, 5));
import { sum } from '@lyubomyr.rudko/demo';

console.log(sum(1, 2, 3, 4, 5));


// generic functions
function onGenericFunctions() {
  function getFirstElement(arr: unknown[]) {
    return arr[0];
  }
  const arr = [1, 2, 3];
  const val = getFirstElement(arr); // val is of type unkonwn
  console.log(val);

  function getFirstElementV2<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  const val2 = getFirstElementV2<number>(arr); // val2 is of type number
  if (val2 !== undefined) {
    console.log(val2 + 10);
  } else {
    console.log('val2 is undefined');
  }

  function findLargest1<T>(arr: T[]): T {
    return arr.reduce((acc, item) => (item > acc ? item : acc));
  }
  const l = findLargest1([1, 2, 3]); // no type param passed, and no compile time error
  console.log(l);

  function findLargest2<T>(arr: T[], comparator: (a: T, b: T) => boolean): T {
    return arr.reduce((acc, item) => (comparator(item, acc) ? item : acc));
  }
  const l2 = findLargest2([1, 2, 3], (a, b) => a > b);
  console.log(l2);
}
onGenericFunctions();

// type assertions
function onTypeAssertions() {
  // we have a function that returns unknown type
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }

  const userAge = fetchUserAge();

  if (typeof userAge === 'number') {
    console.log(userAge + 1);
  }

  // or use type assertion
  console.log((userAge as number) + 1);

  // type TUser = {
  //   name: string;
  //   age: number;
  // };

  // console.log((1 as unknown as TUser).name);

  // // or use type assertion
  // console.log((userAge as TUser).age + 1);
  console.log(<number>userAge + 1);
}
onTypeAssertions();

// type casting
function onTypeCasting() {
  const value: unknown = '123';
  const num = Number(value);

  // const num2 = +value;

  let num3: number = 0;

  if (typeof value === 'number') {
    console.log(value + 1);

    num3 = value;
  } else if (typeof value === 'string') {
    num3 = Number(value);
    // num3 = +value;
  }

  console.log(num, num3);
}
onTypeCasting();

// type declarations
function onTypeDeclarations() {
  // lodash example
  const arr = [1, 2, 3, 4, 5];
  const chunkedArr = chunk(arr, 2);
  console.log(chunkedArr);

  console.log(process.env.N_ENV);
}
onTypeDeclarations();

// asyn/await
async function onAsyncAwait() {
  // create a function print 1 in 1sec, 2 in 2sec, 3 in 3sec
  function print() {
    setTimeout(() => {
      console.log(1);
      setTimeout(() => {
        console.log(2);

        setTimeout(() => {
          console.log(3);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  print();

  // create a function print 1 in 1sec, 2 in 2sec, 3 in 3sec
  function later(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  function print2() {
    later(1000)
      .then(() => {
        console.log(1);
        return later(1000);
      })
      .then(() => {
        console.log(2);
        return later(1000);
      })
      .then(() => {
        console.log(3);
      });
  }

  print2();

  async function print3() {
    await later(1000); // return Promise<void>
    console.log(1);
    await later(1000); // return Promise<void>
    console.log(2);
    await later(1000); // return Promise<void>
    console.log(3);
  }

  print3();

  async function calculateLargeSum() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      // this loop is blocking the main thread
      // UI is not responsive
      sum += i;
      if (i % 10000000 === 0) {
        await later(1);
      }
    }
    return sum;
  }

  calculateLargeSum().then((sum) => console.log(sum));
  console.log('after calculateLargeSum', await calculateLargeSum());
}
onAsyncAwait();

// creating an NPM Package

// creating react app with typescript
