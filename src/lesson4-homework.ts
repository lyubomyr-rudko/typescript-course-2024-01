import { add } from '@yuliia-yg/test-npm-package';

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise13A() {
  // TODO: create a function that takes an array of numbers and returns a random number from the array
  function randomNumberFromArray(arr: number[]): number {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(randomNumberFromArray([9, 4, 8, 5]));
  // TODO: create a function that takes an array of strings and returns a random string from the array
  function randomStringFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(randomStringFromArray(['one', 'two', 'three']));
  // TODO: create a function that takes an array of objects and returns a random object from the array
  function randomObjectFromArray(arr: { name: string }[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(randomObjectFromArray([{ name: 'Yulia' }, { name: 'Oleg' }]));
  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
  function randomItemFromArray<T>(arr: Array<T>) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(randomItemFromArray([5, 8, 6]));
  console.log(randomItemFromArray(['hi', 'hello']));
  console.log(randomItemFromArray([{ day: 1 }, { day: 2 }]));
  console.log(randomItemFromArray([5, 'hi', { name: 'Yulia' }]));
}
// TODO: compile and run the code

excercise13A();
// TODO: write unit-tests for the function above, passing different types of arrays to it
export function randomItemFromArray<T>(arr: Array<T>) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomItemFromArray([5, 8, 6]));
console.log(randomItemFromArray(['hi', 'hello']));
console.log(randomItemFromArray([{ day: 1 }, { day: 2 }]));
console.log(randomItemFromArray([5, 'hi', { name: 'Yulia' }]));

// TODO: create a generic function that takes an array of items, and number of items, and generates a chunked array
// TODO: for example, if the input array is [1, 2, 3, 4, 5] and the number of items is 2, the output should be [[1, 2], [3, 4], [5]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9], 3 => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
function excercise13B() {
  function chunk<T>(array: Array<T>, size: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
}
// TODO: compile and run the code

excercise13B();
// TODO: write unit-tests for the function above, passing different types of arrays to it, and different number of items
export function chunk<T>(array: Array<T>, size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// use type assertions to fix the error in the code
function excercise14() {
  // NOTE: do not change this function
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge();
  // TODO: uncomment the following code and add type assertion to fix the error
  console.log((userAge as number) + 1);
  // console.log(userAge); // TODO remove this line
}
// TODO: compile and run the code
excercise14();

// use type casting to fix the mistake in the code
// run the code before and after adding type casting to see the difference
function excercise15() {
  function fetchUserAge() {
    const responseText = '{"name": "John", "age": "16"}';
    return JSON.parse(responseText).age;
  }
  const userAge: number = +fetchUserAge();
  // TODO: run the code below and observe the result, explain why it is happening,
  // TODO: add type casting to the function above, convert the age to number, fix the errors
  if (userAge === 16) {
    console.log('Time to get your driver license');
  } else if (userAge > 16) {
    console.log('You are old enough to drive');
  } else {
    console.log('You are not old enough to drive');
  }
}
// TODO: compile and run the code
excercise15();

// use type declarations to fix the comments in the code
function excercise16() {
  // TODO: add code which uses process.env.NODE_ENV variable,
  const env = process.env.NODE_ENV;
  console.log(env);
  // TODO: try to compile and see the error
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  // TODO: rename global.d.ts to global.d.ts.disabled file, copile and see the error again
  // TODO: install type declarations from error message -  @types/node
  // NOTE: Remember - most of the times type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
}
// TODO: compile and run the code
excercise16();

// create an npm package of your own
function exercise17() {
  // +TODO: register on npmjs.com
  // +TODO: check email and confirm npm account email
  // +TODO: create a git repository for your package, name it test-npm-package
  // +TODO: clone the repository to your local machine
  // +TODO: run npm login to login to npm > npm login
  // +TODO: run npm init -y to create package.json file > npm init -y
  // +TODO: install typescript > npm install -g typescript -D
  // +TODO: create tsconfig.json file > npx tsc --init --rootDir src --outDir lib --declaration --sourceMapn --declarationMap
  // +TODO: update package.json file with the following values
  // "main": "lib",
  // "types": "lib",
  // "scripts": {
  //   "build": "tsc",
  //   "start": "tsc -w",
  // },
  // +TODO: update package name to @yourusername/test-npm-package
  // TODO: make sure yourusername is the same as your npmjs.com username
  // +TODO: create ./index.ts file with the following code
  // +export const add = (a: number, b: number) => a + b;
  // +TODO: run npm run build to compile the code > npm run build
  // +TODO: add your changes and push to git repository
  // +TODO: run publish command > npm publish --access=public
  // +TODO: check your package on npmjs.com
  // +TODO: update your package version > npm version patch
  // +TODO: run publish command > npm publish --access=public
  // +TODO: check your package on npmjs.com and see the updated version
  // +TODO: open/create another js project, install your package > npm install @yourusername/test-npm-package
  // +TODO: add import statement to the code > import { add } from '@yourusername/test-npm-package';
  // +TODO: use add function call in the code > console.log(add(1, 2));
  console.log(add(1, 2));
  // +TODO: compile and run the code
  // https://www.youtube.com/watch?v=J4b_T-qH3BY - how to publish npm package, in case you are stuck
}
exercise17();
