export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another?
// adapter
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure?
// composite
// 3. Which  structural pattern to use when we want to add new functionality to an object without altering its structure, create multiple mixtures of options?
// decorator
// 4. Which  structural pattern to use to create a simplified interface to a complex system?
// facade
// 5. Which  structural pattern allows create object-replacement of original object, that would adding access check or caching before calling original method?
// proxy

function excerciseA() {
  // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
  // Use one of the Structural patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.
  // SOLUTION - pattern version DECORATOR - Instead of inheritance, we use wrapper composition

  interface IComputer {
    printConfiguration(): string;
  }
  //base
  class ComputerBase implements IComputer {
    constructor() {}

    printConfiguration(): string {
      return 'Computer base';
    }
  }

  // decorator
  class CustomComputer implements IComputer {
    protected computer: IComputer;

    constructor(computer: IComputer) {
      this.computer = computer;
    }

    public printConfiguration(): string {
      return this.computer.printConfiguration(); //'Computer base'
    }
  }

  // extends versions
  class ComputerWithProcessor extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor`;
    }
  }

  class ComputerWithMemory extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with memory`;
    }
  }

  class ComputerWithHardDrive extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with hard drive`;
    }
  }

  class ComputerWithProcessorAndMemory extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor and memory`;
    }
  }

  class ComputerWithProcessorAndHardDrive extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor and hard drive`;
    }
  }

  class ComputerWithMemoryAndHardDrive extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with memory and hard drive`;
    }
  }

  class ComputerWithProcessorAndMemoryAndHardDrive extends CustomComputer {
    printConfiguration() {
      return `${super.printConfiguration()}, with processor, memory and hard drive`;
    }
  }

  const computer = new ComputerBase();
  console.log(computer.printConfiguration());
  // simple
  const computerWithProcessor = new ComputerWithProcessor(computer);
  console.log(computerWithProcessor.printConfiguration());
  const computerWithMemory = new ComputerWithMemory(computer);
  console.log(computerWithMemory.printConfiguration());
  const computerWithHardDrive = new ComputerWithHardDrive(computer);
  console.log(computerWithHardDrive.printConfiguration());
  // as chain
  const chain_computerWithProcessorAndMemory = new ComputerWithMemory(
    new ComputerWithProcessor(computer),
  );
  console.log(
    'as chain: ',
    chain_computerWithProcessorAndMemory.printConfiguration(),
  );
  // complex
  const computerWithProcessorAndMemory = new ComputerWithProcessorAndMemory(
    computer,
  );
  console.log(computerWithProcessorAndMemory.printConfiguration());
  const computerWithProcessorAndHardDrive =
    new ComputerWithProcessorAndHardDrive(computer);
  console.log(computerWithProcessorAndHardDrive.printConfiguration());
  const computerWithMemoryAndHardDrive = new ComputerWithMemoryAndHardDrive(
    computer,
  );
  console.log(computerWithMemoryAndHardDrive.printConfiguration());
  const computerWithProcessorAndMemoryAndHardDrive =
    new ComputerWithProcessorAndMemoryAndHardDrive(computer);
  console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
}
excerciseA();
