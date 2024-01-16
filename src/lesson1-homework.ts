/* eslint-disable @typescript-eslint/no-unused-vars */
// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
// function excercise1() {
//   let greeting: string;
//   greeting = 'Hello World';
//   greeting += '!!!';
//   console.log(greeting);
// }
function excercise2() {
  // declare two varaibles - one of string, one of type number
  const str: string = `Hello World!`;
  const num: number = 10;
  console.log(str, num);

  // assign string var value 'Hello'
  const a: string = `Hello`;
  console.log(a);

  // assign number var value 3
  const b: number = 3;
  console.log(b);

  // create a while loop which prints string variable to console 3 times
  let counter: number = 0;
  const myString: string = `Hello TypeScript!`;
  while (counter < 3) {
    console.log(myString);
    counter++;
  }

  // try to assign number variable to string variable - observe the error
  // const errMessage: string = 7;
}

excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
  // TODO: declare varaibles n and m of type number
  const n: number = 1;
  const m: number = 10;

  // TODO: declare variable result of type array of numbers
  const result: number[] = [];

  // TODO: assign n and m some values - n = 1, m = 10
  // TODO: create a for loop which adds numbers from n to m to result array
  for (let i = n; i <= m; i++) {
    result.push(i);
  }
  console.log(result);

  // TODO: support case where m > n (reverse the order)
  const reversedResult: number[] = [];
  for (let i = m; i >= n; i--) {
    reversedResult.push(i);
  }
  // TODO: print result array to console
  console.log(reversedResult);
}

excercise3();
// TODO: compile and run the code
