// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/ban-types */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// // ********* Lesson 12 *********

// function lesson12() {
//   // Fix autocoplete problem for literal union types
//   function fixAutocompleteProblemForLiteralUnionTypes() {
//     type Color = 'red' | 'green' | 'blue' | string;

//     function drawRectangle(color: Color) {
//       console.log(color);
//     }
//     drawRectangle('blue'); // no autocomplete
//     // string includes all possible strings, so Color is a string type alias
//     // if to remove the string - nice autocomplete, but we lose the ability to pass any string
//     type Color2 = ('red' | 'green' | 'blue') | (string & {});
//     function drawRectangle2(color: Color2) {
//       console.log(color);
//     }
//     drawRectangle2('red'); // autocomplete works
//   }
//   fixAutocompleteProblemForLiteralUnionTypes();

//   // Satisfies constraint
//   function satisfiesConstraint() {
//     type ColorString = 'red' | 'green' | 'blue';
//     type ColorRGB = [red: number, green: number, blue: number];

//     type Color = ColorString | ColorRGB;

//     type Theme = {
//       [x: string]: Color;
//     };
//     // same as
//     // type Theme = Record<string, Color>;

//     const theme: Theme = {
//       primary: 'green',
//       secondary: [0, 255, 0],
//       danger: 'red',
//     };

//     const [r, g, b] = theme.secondary555; // no error checking

//     const theme2 = {
//       primary: 'green',
//       secondary: [0, 255, 0],
//       danger: 'red',
//     } satisfies Theme;

//     const [r1, g1, b1] = theme2.secondary;

//     const _temp: Theme = theme2;
//   }
//   satisfiesConstraint();

//   // Utility Property key type
//   function propertyKeyType() {
//     // only string, number and symbol can be used as property keys
//     const str = 'str';
//     const num = 1;
//     const sym = Symbol();

//     const obj = {
//       [str]: 1,
//       [num]: 2,
//       [sym]: 3,
//     };

//     const objAsKe = {};

//     const obj2 = {
//       // [objAsKe]: 1, // inva
//     };

//     // type PropertyKey = string | number | symbol;
//     const str2: PropertyKey = 'str';
//     const num2: PropertyKey = 1;
//     const sym2: PropertyKey = Symbol();
//     // const obj3: PropertyKey = {}; // invalid
//   }
//   propertyKeyType();
//   // React with Typescript - complex hooks
//   // useDebugValue
//   // Custom Hooks
// }
// lesson12();
