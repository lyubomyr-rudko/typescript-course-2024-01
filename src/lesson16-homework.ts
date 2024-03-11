export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another?
//Adapter
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure?
//Composite
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

  interface Computer {
    printConfiguration(): string;
  }

  class BaseComputer implements Computer {
    printConfiguration() {
      return 'Computer base';
    }
  }

  interface AdditionalFunctionality {
    addFunctionality(): string;
  }

  class Processor implements AdditionalFunctionality {
    addFunctionality() {
      return 'with processor';
    }
  }

  class Memory implements AdditionalFunctionality {
    addFunctionality() {
      return 'with memory';
    }
  }

  class HardDrive implements AdditionalFunctionality {
    addFunctionality() {
      return 'with hard drive';
    }
  }

  class ComputerAdapter implements Computer {
    constructor(
      private computer: Computer,
      private functionalities: AdditionalFunctionality[],
    ) {}

    printConfiguration() {
      const baseConfiguration = this.computer.printConfiguration();
      const addedFunctionalities = this.functionalities
        .map((func) => func.addFunctionality())
        .join(', ');
      return `${baseConfiguration}, ${addedFunctionalities}`;
    }
  }

  const computer: Computer = new BaseComputer();
  console.log(computer.printConfiguration());

  const computerWithProcessor = new ComputerAdapter(computer, [
    new Processor(),
  ]);
  console.log(computerWithProcessor.printConfiguration());

  const computerWithMemory = new ComputerAdapter(computer, [new Memory()]);
  console.log(computerWithMemory.printConfiguration());

  const computerWithHardDrive = new ComputerAdapter(computer, [
    new HardDrive(),
  ]);
  console.log(computerWithHardDrive.printConfiguration());

  const computerWithProcessorAndMemory = new ComputerAdapter(computer, [
    new Processor(),
    new Memory(),
  ]);
  console.log(computerWithProcessorAndMemory.printConfiguration());
  const computerWithProcessorAndHardDrive = new ComputerAdapter(computer, [
    new Processor(),
    new HardDrive(),
  ]);
  console.log(computerWithProcessorAndHardDrive.printConfiguration());
  const computerWithMemoryAndHardDrive = new ComputerAdapter(computer, [
    new Memory(),
    new HardDrive(),
  ]);
  console.log(computerWithMemoryAndHardDrive.printConfiguration());

  const computerWithProcessorAndMemoryAndHardDrive = new ComputerAdapter(
    computer,
    [new Memory(), new HardDrive(), new Processor()],
  );
  console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
}
excerciseA();
