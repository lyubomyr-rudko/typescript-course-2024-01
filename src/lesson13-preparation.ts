/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 13 *********

function lesson13() {
  // Enums
  function enums() {
    enum FileAccess {
      None, // 000
      Read = 1 << 1, // 001
      Write = 1 << 2, // 010
      Execute = 1 << 3, // 100
      ReadWrite = Read | Write, // 011
    }

    function checkAccess(access: number) {
      if (access & FileAccess.Read) {
        console.log('Read');
      }
      if (access & FileAccess.Write) {
        console.log('Write');
      }
      if (access & FileAccess.Execute) {
        console.log('Execute');
      }
    }
    checkAccess(1);
    checkAccess(2);
    checkAccess(3);
    checkAccess(4);
    checkAccess(5);
  }
  enums();

  // React with Typescript - more on hooks - performance optimization
  // - useCallback
  // - useMemo
  // - useRef
  // - useImperativeHandle
  // - useReducer
  // - useContext
  // vite: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
  // $ npm create vite@latest
}
lesson13();
