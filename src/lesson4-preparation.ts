/* eslint-disable */
function lesson4preparation() {
  //  *** generic functions
  function onGenericFunctions() {
    function getFirstElement(arr: unknown[]) {
      return arr[0];
    }

    const arr = [1, 2, 3];
    const val = getFirstElement(arr); // val is of type unkonwn

    function getFirstElementV2<T>(arr: T[]): T {
      return arr[0];
    }

    const val2 = getFirstElementV2<number>(arr); // val2 is of type number
    // no need to explicitly specify the type parameter, it is inferred from the argument

    // more generic functions
    function findLargest1(arr: any[]) {
      return arr.reduce((acc, item) => (item > acc ? item : acc));
    }
    findLargest1([1, 2, 3]); // no type param passed, and no compile time error

    function findLargest2<T>(arr: T[], comparator: (a: T, b: T) => boolean): T {
      return arr.reduce((acc, item) => (comparator(item, acc) ? item : acc));
    }
  }

  onGenericFunctions();

  // *** Type Assertions
  function onTypeAssertions() {
    // we have a function that returns unknown type
    function fetchUserAge(): unknown {
      const responseText = '{"name": "John", "age": 18}';
      return JSON.parse(responseText).age;
    }

    // we want to use the function
    const userAge = fetchUserAge();
    // but we can't use it as a number
    // console.log(userAge + 1); // error
    // add runtype check
    if (typeof userAge === 'number') {
      console.log(userAge + 1);
    }

    // or use type assertion
    console.log((userAge as number) + 1);

    // as keywrord followed by the type
    // you tell compiler that you know better

    // angle bracket syntax
    console.log(<number>userAge + 1);
    // this syntax is used in jsx files, so it is better to use as keyword

    // type assertion is not type casting, value is not changed
    // better to use type check and convert the value
  }
  onTypeAssertions();

  // *** Type Casting
  function onTypeCasting() {
    // type casting is used to convert one type to another
    // type assertion is used to tell compiler that you know better
    // it is not converting one type to another, you need to add explicit conversion code
    // type casting is done at runtime

    // type assertion example
    let val = '12345';
    let num = val as unknown as number; // type assertion
    console.log(num === 12345); // false - num is of type string, while compiler thinks it is of type number

    // type casting example
    let val2 = '12345';
    let num2 = Number(val2); // type casting
    let num3 = +val2; // type casting
    console.log(num2 === 12345); // true - num2 is of type number
    console.log(num3 === 12345); // true - num3 is of type number
  }
  onTypeCasting();

  // *** Type Declarations
  function onTypeDeclarations() {
    // type declarations are used to add type information to the code which is not written in TypeScript
    // for example, when using JavaScript libraries
    //
    // example: lodash
    // import _ from 'lodash';
    // _.chunk([1, 2, 3, 4, 5], 2); // returns [[1, 2], [3, 4], [5]]
    //
    // type declarations are stored in .d.ts files
    // and are used by the compiler to check the code
    // type declarations are not included in the compiled code
    //
    // create file lodash.d.ts
    // declare module 'lodash' {
    //   export function chunk<T>(array: T[], size?: number): T[][];
    // }
    // or install type declarations for lodash - @types/lodash
    //
    // standard approach to access env variables is to use process.env
    // but process.env is not available in TypeScript
    // console.log(process.env.NODE_ENV);
    // declare const process: any;
    // in file global.d.ts
    // or install type declarations for node - @types/node
  }
  onTypeDeclarations();

  // *** Async Await
  async function onAsyncAwait() {
    // async await is a syntactic sugar for promises
    // async await is used to write asynchronous code in synchronous style
    // async await is used to avoid callback hell
    // async await is used to avoid promise chaining
    // async await is used to avoid promise error handling
    // example
    function printMessagesWithTimeout() {
      setTimeout(() => {
        console.log('1');

        setTimeout(() => {
          console.log('2');

          setTimeout(() => {
            console.log('3');
          }, 1000);
        }, 1000);
      }, 1000);
    }
    printMessagesWithTimeout();
    // the problem with the code above is that it is hard to read and maintain
    // it is hard to add more messages, change the order of the messages
    // it is hard to add error handling
    // example with async await

    async function printMessagesWithTimeoutV2() {
      await later(1000);
      console.log('1');
      await later(1000);
      console.log('2');
      await later(1000);
      console.log('3');
    }
    // const arrowAsync = async () => {}; // async arrow function syntax example
    const later = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    printMessagesWithTimeoutV2();

    // async await can be used to do asyncronous loops
    function calculateLargeSum() {
      let sum = 0;
      for (let i = 0; i < 10000000000; i++) {
        // this loop is blocking the main thread
        // UI is not responsive
        sum += i;
      }
      return sum;
    }
    calculateLargeSum();

    // async await can be used to do asyncronous loops
    async function calculateLargeSumAsync() {
      let sum = 0;
      for (let i = 0; i < 10000000000; i++) {
        if (i % 10000000 === 0) {
          await later(1);
        }
        sum += i;
      }
      return sum;
    }

    // calculateLargeSumAsync().then((sum) => console.log(sum)); //
    const sum = await calculateLargeSumAsync();
    console.log(sum);
  }
  onAsyncAwait();

  // *** Creating an NPM Package
  function onCreatingNPMPackage() {
    // https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/
    // npm init -y
    // npm install -g typescript -D
    // -D - for dev dependencies
    // npx tsc --init --rootDir src --outDir lib --declaration --sourceMapn --declarationMap
    // update package.json
    // "main": "lib",
    // "types": "lib",
    // "scripts": {
    //   "build": "tsc",
    //   "start": "tsc -w",
    // },
    // "name": "@lyubomyr-rudko/test-npm-package"
    // npm install --scope=lyubomyr-rudko
    // creates scoped package
    // how to publish to npm?
    // 1. register on npmjs.com
    // 2. npm login
    // 3. confirm email
    // 4. npm publish (npm publish --access=public)
    // 5. npm version patch
  }
  onCreatingNPMPackage();

  // *** Creating React App with TypeScript
  function onCreatingReactAppWithTypescript() {
    // npx create-react-app my-app --template typescript
    // npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    // npm run build
    // npm start
  }
}
lesson4preparation();
