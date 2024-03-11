export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another?
// Adapter pattern is used when we want to convert one interface to another.
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure?
// Composite pattern is used when we want to represent a complex object as a tree-like structure.
// 3. Which  structural pattern to use when we want to add new functionality to an object without altering its structure, create multiple mixtures of options?
// Decorator pattern is used when we want to add new functionality to an object without altering its structure, and create multiple mixtures of options.
// 4. Which  structural pattern to use to create a simplified interface to a complex system?
// Facade pattern is used to create a simplified interface to a complex system.
// 5. Which  structural pattern allows create object-replacement of original object, that would adding access check or caching before calling original method?
// Proxy pattern allows creating an object-replacement of the original object, adding access checks or caching before calling the original method.

// function excerciseA() {
//   // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
//   // Use one of the Structural patterns to implement this requirement.
//   // Rewrite the class to use the standard implementation of that pattern.
//   class ComputerBase {
//     constructor() {}
//
//     printConfiguration() {
//       return 'Computer base';
//     }
//   }
//
//   class ComputerWithProcessor extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with processor';
//     }
//   }
//
//   class ComputerWithMemory extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with memory';
//     }
//   }
//
//   class ComputerWithHardDrive extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with hard drive';
//     }
//   }
//
//   class ComputerWithProcessorAndMemory extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with processor and memory';
//     }
//   }
//
//   class ComputerWithProcessorAndHardDrive extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with processor and hard drive';
//     }
//   }
//
//   class ComputerWithMemoryAndHardDrive extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with memory and hard drive';
//     }
//   }
//
//   class ComputerWithProcessorAndMemoryAndHardDrive extends ComputerBase {
//     printConfiguration() {
//       return 'Computer base, with processor, memory and hard drive';
//     }
//   }
//
//   const computer = new ComputerBase();
//   console.log(computer.printConfiguration());
//   const computerWithProcessor = new ComputerWithProcessor();
//   console.log(computerWithProcessor.printConfiguration());
//   const computerWithMemory = new ComputerWithMemory();
//   console.log(computerWithMemory.printConfiguration());
//   const computerWithHardDrive = new ComputerWithHardDrive();
//   console.log(computerWithHardDrive.printConfiguration());
//   const computerWithProcessorAndMemory = new ComputerWithProcessorAndMemory();
//   console.log(computerWithProcessorAndMemory.printConfiguration());
//   const computerWithProcessorAndHardDrive =
//     new ComputerWithProcessorAndHardDrive();
//   console.log(computerWithProcessorAndHardDrive.printConfiguration());
//   const computerWithMemoryAndHardDrive = new ComputerWithMemoryAndHardDrive();
//   console.log(computerWithMemoryAndHardDrive.printConfiguration());
//   const computerWithProcessorAndMemoryAndHardDrive =
//     new ComputerWithProcessorAndMemoryAndHardDrive();
//   console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
// }
//
// excerciseA();
function exerciseA() {
  interface Computer {
    printConfiguration(): string;
  }

  class ComputerBase implements Computer {
    printConfiguration() {
      return 'Computer base';
    }
  }

  abstract class ComputerDecorator implements Computer {
    protected computer: Computer;

    constructor(computer: Computer) {
      this.computer = computer;
    }

    printConfiguration() {
      return this.computer.printConfiguration();
    }
  }

  class ComputerWithProcessor extends ComputerDecorator {
    printConfiguration() {
      return `${this.computer.printConfiguration()}, with processor`;
    }
  }

  class ComputerWithMemory extends ComputerDecorator {
    printConfiguration() {
      return `${this.computer.printConfiguration()}, with memory`;
    }
  }

  class ComputerWithHardDrive extends ComputerDecorator {
    printConfiguration() {
      return `${this.computer.printConfiguration()}, with hard drive`;
    }
  }

  let computer: Computer = new ComputerBase();
  console.log(computer.printConfiguration());

  computer = new ComputerWithProcessor(computer);
  console.log(computer.printConfiguration());

  computer = new ComputerWithMemory(computer);
  console.log(computer.printConfiguration());

  computer = new ComputerWithHardDrive(computer);
  console.log(computer.printConfiguration());

  const computerWithProcessorAndMemory = new ComputerWithMemory(
    new ComputerWithProcessor(computer),
  );
  console.log(computerWithProcessorAndMemory.printConfiguration());
}

exerciseA();
