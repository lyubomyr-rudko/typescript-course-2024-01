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
function excercise1() {
  let greeting: string;
  greeting = 'Hello World';
  greeting += '!!!';
  console.log(greeting);
}
excercise1();
// TODO: run typescript in watch mode
// TODO: compare with javascript generated by typescript

// 2. loop which prints string to console n times
function excercise2() {
  // declare two varaibles - one of string, one of type number
  // assign string var value 'Hello'
  // assign number var value 3
  let str: string;
  let num: number;

  str = 'Hello';
  num = 3;
  
  // create a while loop which prints string variable to console 3 times
  let count: number = 0;
  while(count < num ){
    console.log(str);
    count++
  }
 
  // try to assign number variable to string variable - observe the error


}
excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
  // TODO: declare varaibles n and m of type number
  let n: number;
  let m: number;

  // TODO: declare varaible result of type array of numbers
  let result: Array<number> = []

  // TODO: assign n and m some values - n = 1, m = 10
  n = 1;
  m = 10;

  // TODO: create a for loop which adds numbers from n to m to result array

  for(let i = n; i <= m; i++){
    result.push(i)
  }
  console.log(result)

  // TODO: support case where m > n (reverse the order)
  if(n <= m){
    for(let i = n; i <= m; i++){
      result.push(i)
    }
  }else{
    for(let i = n; i <= m; i--){
      result.push(i)
    }
  }
  console.log(result)

  // TODO: support case where n > m (reverse the order)

  // TODO: print result array to console
}
excercise3();
// TODO: compile and run the code
