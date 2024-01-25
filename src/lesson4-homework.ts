import { add } from '@dihand79/test-npm-package';

// create a generic function which takes an array of items of type T and returns the random item from the array
function excercise13A() {
  // TODO: create a function that takes an array of numbers and returns a random number from the array
  function randomFromArrayNumbers(input: number[]): number {
    const random: number = Math.floor(Math.random() * input.length);
    return input[random];
  }
  console.log(
    'Random number from array [12,3,5,54,6,45,7]:\n',
    randomFromArrayNumbers([12, 3, 5, 54, 6, 45, 7]),
  );

  // TODO: create a function that takes an array of strings and returns a random string from the array
  function randomFromArrayStrings(input: string[]): string {
    const random: number = Math.floor(Math.random() * input.length);
    return input[random];
  }
  console.log(
    'Random string from array["qwerty", "asd", "Alice"]:\n',
    randomFromArrayStrings(['qwerty', 'asd', 'Alice']),
  );

  // TODO: create a function that takes an array of objects and returns a random object from the array
  function randomObjectFromArray(input: object[]): object {
    const random: number = Math.floor(Math.random() * input.length);
    return input[random];
  }
  console.log(
    'Random number from array [{name: "Stan"}, {name: "Alex"}, {name: "Helga"}]:\n',
    randomObjectFromArray([
      { name: 'Stan' },
      { name: 'Alex' },
      { name: 'Helga' },
    ]),
  );
  // TODO: observe the same structure of the functions above, and create a generic function which takes an array of items of type T and returns the random item from the array
  function randomDataFromArray<T>(input: T[]): T {
    const random: number = Math.floor(Math.random() * input.length);
    return input[random];
  }
  console.log(
    'Random number from array custun type data [{name: "Stan"}, "Alex", 123]:\n',
    randomObjectFromArray([
      { name: 'Stan' },
      { name: 'Alex' },
      { name: 'Helga' },
    ]),
  );

  return {
    randomFromArrayNumbers,
    randomFromArrayStrings,
    randomObjectFromArray,
    randomDataFromArray,
  };
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of arrays to it
export const excercise13ATest = excercise13A();

// TODO: create a generic function that takes an array of items, and number of items, and generates a chunked array
// TODO: for example, if the input array is [1, 2, 3, 4, 5] and the number of items is 2, the output should be [[1, 2], [3, 4], [5]]
// [1, 2, 3, 4, 5, 6, 7, 8, 9], 3 => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function excercise13B() {
  function genChanks<T>(arr: T[], subArraySize: number): T[][] {
    let resChanks: T[][] = [];
    let subArray: T[] = [];
    arr.forEach((el, i) => {
      if (arr.length === 0) {
        return resChanks.push([]);
      } else {
        if (i % subArraySize === 0) {
          subArray = [];
          subArray.push(el);
        } else {
          subArray.push(el);
        }

        if (i % subArraySize === 0) return resChanks.push(subArray);
      }
    });

    return resChanks;
  }

  //
  console.log(
    `CHANKS from :
[2, 7, 1, 3, 6, 5, 9, 17, 3, 4, 30, 1, 2]:3\n
`,
    genChanks([2, 7, 1, 3, 6, 5, 9, 17, 3, 4, 30, 1, 2], 3),
  );
  console.log(
    `CHANKS from :
[2, 7, 1, 3, 6, 5, 9, 17, 3, 4, 30, 1, 2]:2\n
`,
    genChanks([2, 7, 1, 3, 6, 5, 9, 17, 3, 4, 30, 1, 2], 2),
  );
  console.log(
    `CHANKS from :
[]:12\n
`,
    genChanks([], 12),
  );

  //
  return genChanks;
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of arrays to it, and different number of items
export const excercise13BTest = excercise13B();

// use type assertions to fix the error in the code
function excercise14() {
  // NOTE: do not change this function
  function fetchUserAge(): unknown {
    const responseText = '{"name": "John", "age": 18}';
    return JSON.parse(responseText).age;
  }
  const userAge = fetchUserAge();
  // TODO: uncomment the following code and add type assertion to fix the error
  console.log((userAge as number) + 1); // : fixed
  // console.log(userAge); // TODO remove this line

  return fetchUserAge;
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
  // const userAge = fetchUserAge(); // You are not old enough to drive - age as string "16"
  const userAge = Number(fetchUserAge()); // Time to get your driver license - age parsed as number 16
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
  // TODO: try to compile and see the error  -->  ERR ReferenceError: process is not defined
  // TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
  // TODO: try to compile and see the error fixed
  const ENV = process.env.NODE_ENV;
  console.log('FIRST LOOK process.env.NODE_ENV: ', ENV); // not work for web compile

  // TODO: rename global.d.ts to global.d.ts.disabled file, copile and see the error again
  // ERR: error TS2322: Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.
  // TODO: install type declarations from error message -  @types/node
  // after install npm install --save-dev @types/node
  // NOTE: Remember - most of the times type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
}
// TODO: compile and run the code
excercise16();

// create an npm package of your own
function exercise17() {
  // TODO: register on npmjs.com
  // TODO: check email and confirm npm account email
  // TODO: create a git repository for your package, name it test-npm-package
  // TODO: clone the repository to your local machine
  // TODO: run npm login to login to npm > npm login
  // TODO: run npm init -y to create package.json file > npm init -y
  // TODO: install typescript > npm install -g typescript -D
  // TODO: create tsconfig.json file > npx tsc --init --rootDir src --outDir lib --declaration --sourceMapn --declarationMap
  // TODO: update package.json file with the following values
  // "main": "lib",
  // "types": "lib",
  // "scripts": {
  //   "build": "tsc",
  //   "start": "tsc -w",
  // },
  // TODO: update package name to @yourusername/test-npm-package
  // TODO: make sure yourusername is the same as your npmjs.com username
  // TODO: create ./index.ts file with the following code
  // export const add = (a: number, b: number) => a + b;
  // TODO: run npm run build to compile the code > npm run build
  // TODO: add your changes and push to git repository
  // TODO: run publish command > npm publish --access=public
  // TODO: check your package on npmjs.com
  // TODO: update your package version > npm version patch
  // TODO: run publish command > npm publish --access=public
  // TODO: check your package on npmjs.com and see the updated version
  // TODO: open/create another js project, install your package > npm install @yourusername/test-npm-package
  // TODO: add import statement to the code > import { add } from '@yourusername/test-npm-package';
  // TODO: use add function call in the code > console.log(add(1, 2));
  console.log('My NPM test sum(1,2,3,4): ', add(1, 2, 3, 4));

  /**
   *  https://www.npmjs.com/package/@dihand79/test-npm-package
   *
   *  BUT in browser have err:
   *  Uncaught TypeError: Failed to resolve module specifier "@dihand79/test-npm-package".
   *  Relative references must start with either "/", "./", or "../".
   *
   *  ESNext recompiled not helped
   */
  // TODO: compile and run the code
  // https://www.youtube.com/watch?v=J4b_T-qH3BY - how to publish npm package, in case you are stuck
}
exercise17();

// create react app with typescript
function excercise18() {
  //
}
excercise18();
