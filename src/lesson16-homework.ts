// export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another?
// Adapter
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure?
// Composite
// 3. Which  structural pattern to use when we want to add new functionality to an object without altering its structure, create multiple mixtures of options?
//Decorator
// 4. Which  structural pattern to use to create a simplified interface to a complex system?
//Facade
// 5. Which  structural pattern allows create object-replacement of original object, that would adding access check or caching before calling original method?
//Proxy

function excerciseA() {
  // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
  // Use one of the Structural patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.
  class ComputerBase {
    constructor() {}

    printConfiguration() {
      return 'Computer base';
    }
  }
  class ComputerDecorator {
    protected computer: ComputerBase;

    constructor(computer: ComputerBase) {
      this.computer = computer;
    }

    printConfiguration() {
      return this.computer.printConfiguration();
    }
  }
  class CompWithProcessorDecorator extends ComputerDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor`;
    }
  }
  class CompWithMemoryDecorator extends ComputerDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with memory`;
    }
  }

  class CompWithHardDriveDecorator extends ComputerDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with hard drive`;
    }
  }
  let computer = new ComputerBase();
  computer = new CompWithProcessorDecorator(computer);
  computer = new CompWithMemoryDecorator(computer);
  computer = new CompWithHardDriveDecorator(computer);
  console.log(computer.printConfiguration());
}
excerciseA();
