/* eslint-disable @typescript-eslint/no-unused-vars */

// 2. loop which prints string to console n times
function excercise2() {
  // declare two varaibles - one of string, one of type number
  let varaiblesString: string;
  let varaiblesNumber: number;
  // assign string var value 'Hello'
  varaiblesString = 'Hello';
  // assign number var value 3
  varaiblesNumber = 3;
  // create a while loop which prints string variable to console 3 times
  while (varaiblesNumber < 6) {
    console.log(varaiblesString);
    varaiblesNumber++;
  }
  // try to assign number variable to string variable - observe the error
  varaiblesNumber = varaiblesString;
}
excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
  // TODO: declare varaibles n and m of type number
  let n: number;
  let m: number;
  // TODO: declare varaible result of type array of numbers
  const result: number[] = [];
  // TODO: assign n and m some values - n = 1, m = 10
  n = 1;
  m = 10;
  // TODO: create a for loop which adds numbers from n to m to result array
  for (let i = n; i <= m; i++) {
    result.push(i);
  }
  // TODO: support case where m > n (reverse the order)
  if (m > n) {
    result.reverse();
  }
  // TODO: print result array to console
  console.log(result);
}
excercise3();
// TODO: compile and run the code
