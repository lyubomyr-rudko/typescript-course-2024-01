// 2. loop which prints string to console n times
function todo2() {
 let word: string;
 let math: number;
 word = 'Hello';
 math = 3;
 while (math < 6) {
  console.log(word);
  math++;
 }
}
todo2();

// 3. code that generates array of numbers - from n to m
function todo3() {
  let n: number =1;
  let m: number = 10;
  let inc: number[] = [];
  let dec: number[] = [];
  for (let i=n; i<=m; i++) {
    inc.push(i)
  }
  console.log(inc);

  for (let i=m; i>=n; i--) {
    dec.push(i)
  }
  console.log(dec);
}
todo3();
// TODO: compile and run the code

