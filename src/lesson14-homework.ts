// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

function excerciseA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  type TSum = number | any;
  // type TSumFunc = (n1: TSum, n2: TSum) => TSum

  function sum(args: TSum): TSum {
    const isArray: boolean = Array.isArray(args);
    const isShort: boolean = args?.length < 2;

    if (!isArray) {
      console.log('is NO Array');
      return 0;
    } else if (isShort) {
      console.log('is NO Long Array');
      return 0;
    } else {
      let min: number = args[0];
      let max: number = args[0];

      const sumAll = args.reduce((res: number, curr: number): number => {
        if (curr < min) min = curr;
        if (curr > max) max = curr;
        return (res += curr);
      }, 0);
      const res = sumAll - min - max;
      // console.log('Input: ', args);
      // console.log(`min: ${min}, max: ${max}, sumAll: ${sumAll}, res: ${res}`);
      return res;
    }
  }

  console.log(sum([6, 2, 1, 8, 10]));
  console.log(sum([1, 1, 11, 2, 3]));
  // console.log(sum([1]));
  // console.log(sum([]));
  // console.log(sum(NaN));
  // console.log(sum(''));
  // console.log(sum(undefined));

  return sum;
}
export const excerciseATest = excerciseA();

function excerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  function sort(arr: number[] | null): [number, number] | [] {
    if (arr === null || arr?.length === 0) return [];
    else {
      let positives = 0;
      let negatives = 0;
      arr?.forEach((num) => {
        if (num > 0) positives++;
        if (num < 0) negatives += num;
      });

      return [positives, negatives];
    }
  }

  console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

  return sort;
}
export const excerciseBTest = excerciseB();

function excerciseC() {
  // Given an array/list [] of integers ,
  // Construct a product array Of same size Such That
  // prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
  // Notes
  // Array/list size is at least 2 .
  // Array/list's numbers Will be only Positives
  // Repetition of numbers in the array/list could occur.
  //
  // [10,20] return ==> [20,10]
  // [1,2,3,4] return ==> [24,12,8,6]
  // [1,5,2] return ==> [10,2,5]
  // [10,3,5,6,2] return ==> [180,600,360,300,900]
  //
  // implement the funciton avoiding nested loops, with O(N)

  function productGenerator(arr: number[]): number[] | [string] {
    if (arr.length < 2) return ['Array length should be more 2'];
    const res: number[] = [];

    function generateProducts(index: number): number {
      const product = arr.reduce(
        (res: number, curr: number, i: number): number => {
          if (i !== index) return res * Math.abs(curr);
          else return res;
        },
        1,
      );
      return product;
    }

    arr.forEach((n, i) => {
      const p = generateProducts(i);
      res.push(p);
    });
    return res;
  }

  console.log(productGenerator([10, 20, 30, 5, 1])); // [ 3000, 1500, 1000, 6000, 30000 ]
  console.log(productGenerator([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
  console.log(productGenerator([1, 1, 1, 3, 4, 5])); // [ 60, 60, 60, 20, 15, 12 ]

  return productGenerator;
}
export const excerciseCTest = excerciseC();

/* eslint-disable */
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
  // soliD  - saturday
  // https://youtu.be/TxZwqVTaCmA?t=2514
  // BEFORE
  type TColor = string | { r: number; g: number; b: number };
  type TPosition = { x: number; y: number; z: number };
  class userObject1 {
    name: string;
    id: string;
    position: TPosition;
    color: TColor;
    constructor(
      name: string,
      id?: string,
      position?: TPosition,
      color?: TColor,
    ) {
      this.name = name;
      this.id = id || 'defaultID_' + Math.random().toString().padStart(32);
      this.position = position || { x: 0, y: 0, z: 0 };
      this.color = color || { r: 0.5, g: 0.5, b: 0.5 };
    }

    setRGB(rgb: TColor): void {
      this.color = rgb;
    }

    setHEX(hex: string): void {
      this.color = hex;
    }

    setCSSString(css: string): void {
      this.color = css;
    }

    getColor(): void {
      console.log(this.color);
    }
  }

  const obj1 = new userObject1('myTestObj1');
  obj1.setHEX('#ff00ff');
  obj1.getColor();

  // AFTER
  interface ISetColor {
    setColor: (color: TColor) => void;
  }
  // const setRGB = (rgb: TColor): TColor => rgb;
  // class SetRGB implements ISetColor {
  //   newColor: TColor;
  //   constructor(value: TColor) {
  //     this.newColor = value || { r: 0.15, g: 0.15, b: 0.15 };
  //   }
  //   setColor(color: TColor): void {
  //     // color = this.newColor
  //     console.log('new Color', color);
  //   }
  // }
  class SetRGB implements ISetColor {
    newColor: TColor;
    constructor(value: TColor) {
      this.newColor = value || { r: 0.15, g: 0.15, b: 0.15 };
    }
    setColor(color: TColor): void {
      console.log('New color:', color);
    }
  }

  // const setHEX = (hex: TColor): TColor => hex;
  // const setCSSString = (css: TColor): TColor => css;

  class userObject2 implements ISetColor {
    name: string;
    id: string;
    position: TPosition;
    color: TColor;
    setColor: (color: TColor) => any; //ISetColor

    constructor(
      name: string,
      setColor: (color: TColor) => void,
      id?: string,
      position?: TPosition,
      color?: TColor,
    ) {
      this.name = name;
      this.id = id || 'defaultID_' + Math.random().toString().padStart(32);
      this.position = position || { x: 0, y: 0, z: 0 };
      this.color = color || { r: 0.5, g: 0.5, b: 0.5 };
      this.setColor = setColor;
      this.setColor.bind(this);
    }
    setAnyColor(color: TColor): void {
      //  this.color = this.setcolor()
      this.setColor(color);
    }

    getColor(): void {
      console.log(this.color);
    }
  }

  // Argument of type 'SetRGB' is not assignable to parameter of type '(color: TColor) => void'.
  // Type 'SetRGB' provides no match for the signature '(color: TColor): void'.
  // const obj2 = new userObject2(
  //   'myTestObj2',
  //   new SetRGB({ r: 0.35, g: 0.25, b: 0.15 }),
  // );

  // const obj2 = new userObject2('myTestObj2', new SetRGB());
  // obj2.getColor();
  // obj2.setColor({ r: 0.35, g: 0.25, b: 0.15 });
  // obj2.getColor();
  // obj2.setColor('#00ff00');
  // obj2.getColor();
}
excerciseD();

export {};
