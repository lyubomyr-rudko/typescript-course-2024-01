export {};

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
// Proxy

function excerciseA() {
  // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
  // Use one of the Structural patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.

  interface TComputerBase {
    printConfiguration(): string;
  }
  class ComputerBase implements TComputerBase {
    constructor() {}

    printConfiguration() {
      return 'Computer base';
    }
  }

  class BaseDecorator implements TComputerBase {
    protected component: TComputerBase;

    constructor(component: TComputerBase) {
      this.component = component;
    }

    printConfiguration(): string {
      return this.component.printConfiguration();
    }
  }

  class ComputerWithProcessor extends BaseDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor`;
    }
  }

  class ComputerWithMemory extends BaseDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with memory`;
    }
  }

  class ComputerWithHardDrive extends BaseDecorator {
    printConfiguration() {
      return `${super.printConfiguration()}, with hard drive`;
    }
  }

  const computer = new ComputerBase();
  console.log(computer.printConfiguration());
  const computerWithProcessor = new ComputerWithProcessor(computer);
  console.log(computerWithProcessor.printConfiguration());
  const computerWithMemory = new ComputerWithMemory(computer);
  console.log(computerWithMemory.printConfiguration());
  const computerWithHardDrive = new ComputerWithHardDrive(computer);
  console.log(computerWithHardDrive.printConfiguration());
  const computerWithProcessorAndMemory = new ComputerWithMemory(
    computerWithProcessor,
  );
  console.log(computerWithProcessorAndMemory.printConfiguration());
  const computerWithProcessorAndHardDrive = new ComputerWithHardDrive(
    computerWithProcessor,
  );
  console.log(computerWithProcessorAndHardDrive.printConfiguration());
  const computerWithMemoryAndHardDrive = new ComputerWithHardDrive(
    computerWithMemory,
  );
  console.log(computerWithMemoryAndHardDrive.printConfiguration());
  const computerWithProcessorAndMemoryAndHardDrive = new ComputerWithHardDrive(
    computerWithProcessorAndMemory,
  );
  console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
}
excerciseA();
