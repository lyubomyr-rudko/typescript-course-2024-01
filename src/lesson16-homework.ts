export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another?   --> Adapter
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure?  --> Composite
// 3. Which  structural pattern to use when we want to add new functionality to an object without altering its structure, create multiple mixtures of options?  --> Decorator
// 4. Which  structural pattern to use to create a simplified interface to a complex system?  --> Facade
// 5. Which  structural pattern allows create object-replacement of original object, that would adding access check or caching before calling original method?  --> Proxy

function excerciseA() {
  // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
  // Use one of the Structural patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.
  interface Computer {
    printConfiguration(): string;
  }

  class ComputerBase implements Computer {
    printConfiguration() {
      return 'Computer base';
    }
  }

  class ProcessorDecorator implements Computer {
    private computer: Computer;

    constructor(computer: Computer) {
      this.computer = computer;
    }

    printConfiguration() {
      return this.computer.printConfiguration() + ', with processor';
    }
  }

  class MemoryDecorator implements Computer {
    private computer: Computer;

    constructor(computer: Computer) {
      this.computer = computer;
    }

    printConfiguration() {
      return this.computer.printConfiguration() + ', with memory';
    }
  }

  class HardDriveDecorator implements Computer {
    private computer: Computer;

    constructor(computer: Computer) {
      this.computer = computer;
    }

    printConfiguration() {
      return this.computer.printConfiguration() + ', with hard drive';
    }
  }

  const computer = new ComputerBase();
  console.log(computer.printConfiguration());

  const computerWithProcessor = new ProcessorDecorator(new ComputerBase());
  console.log(computerWithProcessor.printConfiguration());

  const computerWithMemory = new MemoryDecorator(new ComputerBase());
  console.log(computerWithMemory.printConfiguration());

  const computerWithHardDrive = new HardDriveDecorator(new ComputerBase());
  console.log(computerWithHardDrive.printConfiguration());

  const computerWithProcessorAndMemory = new MemoryDecorator(
    new ProcessorDecorator(new ComputerBase()),
  );
  console.log(computerWithProcessorAndMemory.printConfiguration());

  const computerWithProcessorAndHardDrive = new HardDriveDecorator(
    new ProcessorDecorator(new ComputerBase()),
  );
  console.log(computerWithProcessorAndHardDrive.printConfiguration());

  const computerWithMemoryAndHardDrive = new HardDriveDecorator(
    new MemoryDecorator(new ComputerBase()),
  );
  console.log(computerWithMemoryAndHardDrive.printConfiguration());

  const computerWithProcessorAndMemoryAndHardDrive = new HardDriveDecorator(
    new MemoryDecorator(new ProcessorDecorator(new ComputerBase())),
  );
  console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
}

excerciseA();
