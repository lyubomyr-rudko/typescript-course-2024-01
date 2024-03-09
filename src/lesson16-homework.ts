export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/structural-patterns
// From the list of the structural patterns: Composite, Decorator, Bridge, Adapter, Facade, Proxy select:
// 1. Which  structural pattern to use when we want to convert one interface to another? ----Adapter
// 2. Which  structural pattern to use when we want to represent a complex object as a tree-like structure? --- Composite
// 3. Which  structural pattern to use when we want to add new functionality to an object without altering its structure, create multiple mixtures of options? ----Decorator
// 4. Which  structural pattern to use to create a simplified interface to a complex system? --- Facade
// 5. Which  structural pattern allows create object-replacement of original object, that would adding access check or caching before calling original method? ----Proxy

function excerciseA() {
  // Imagine you have a class for a Computer, and you would want user to be able to add additional functionality to it.
  // Use one of the Structural patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.

  //before
  console.log('before');
  class ComputerBase {
    constructor() {}

    printConfiguration() {
      return 'Computer base';
    }
  }

  class ComputerWithProcessor extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with processor';
    }
  }

  class ComputerWithMemory extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with memory';
    }
  }

  class ComputerWithHardDrive extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with hard drive';
    }
  }

  class ComputerWithProcessorAndMemory extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with processor and memory';
    }
  }

  class ComputerWithProcessorAndHardDrive extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with processor and hard drive';
    }
  }

  class ComputerWithMemoryAndHardDrive extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with memory and hard drive';
    }
  }

  class ComputerWithProcessorAndMemoryAndHardDrive extends ComputerBase {
    printConfiguration() {
      return 'Computer base, with processor, memory and hard drive';
    }
  }

  const computer = new ComputerBase();
  console.log(computer.printConfiguration());
  const computerWithProcessor = new ComputerWithProcessor();
  console.log(computerWithProcessor.printConfiguration());
  const computerWithMemory = new ComputerWithMemory();
  console.log(computerWithMemory.printConfiguration());
  const computerWithHardDrive = new ComputerWithHardDrive();
  console.log(computerWithHardDrive.printConfiguration());
  const computerWithProcessorAndMemory = new ComputerWithProcessorAndMemory();
  console.log(computerWithProcessorAndMemory.printConfiguration());
  const computerWithProcessorAndHardDrive =
    new ComputerWithProcessorAndHardDrive();
  console.log(computerWithProcessorAndHardDrive.printConfiguration());
  const computerWithMemoryAndHardDrive = new ComputerWithMemoryAndHardDrive();
  console.log(computerWithMemoryAndHardDrive.printConfiguration());
  const computerWithProcessorAndMemoryAndHardDrive =
    new ComputerWithProcessorAndMemoryAndHardDrive();
  console.log(computerWithProcessorAndMemoryAndHardDrive.printConfiguration());
}

// //after
console.log('after');
interface Computer {
  printConfiguration(): string;
}

class ComputerBase implements Computer {
  printConfiguration() {
    return 'Computer base';
  }
}

class Decorator implements Computer {
  protected computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }
  printConfiguration(): string {
    return this.computer.printConfiguration();
  }
}
class ComputerWithProcessor extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with processor`;
  }
}

class ComputerWithMemory extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with memory`;
  }
}

class ComputerWithHardDrive extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with hard drive`;
  }
}

class ComputerWithProcessorAndMemory extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with processor and memory`;
  }
}

class ComputerWithProcessorAndHardDrive extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with processor and hard drive`;
  }
}

class ComputerWithMemoryAndHardDrive extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with memory and hard drive`;
  }
}

class ComputerWithProcessorAndMemoryAndHardDrive extends Decorator {
  constructor(computer: Computer) {
    super(computer);
  }
  printConfiguration(): string {
    return `${super.printConfiguration()}, with processor, memory and hard drive`;
  }
}

let computer = new ComputerBase();
console.log(computer.printConfiguration());
computer = new ComputerWithProcessor(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithMemory(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithHardDrive(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndMemory(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndHardDrive(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithMemoryAndHardDrive(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndMemoryAndHardDrive(new ComputerBase());
console.log(computer.printConfiguration());

//after(второй вариант реализации,немного сократила код)
console.log('after2');

class ComputerWithProcessor2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with processor`;
  }
}

class ComputerWithMemory2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with memory`;
  }
}

class ComputerWithHardDrive2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with hard drive`;
  }
}

class ComputerWithProcessorAndMemory2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with processor and memory`;
  }
}

class ComputerWithProcessorAndHardDrive2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with processor and hard drive`;
  }
}

class ComputerWithMemoryAndHardDrive2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with memory and hard drive`;
  }
}

class ComputerWithProcessorAndMemoryAndHardDrive2 extends Decorator {
  printConfiguration(): string {
    return `${this.computer.printConfiguration()}, with processor, memory and hard drive`;
  }
}

computer = new ComputerWithProcessor2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithMemory2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithHardDrive2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndMemory2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndHardDrive2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithMemoryAndHardDrive2(new ComputerBase());
console.log(computer.printConfiguration());
computer = new ComputerWithProcessorAndMemoryAndHardDrive2(new ComputerBase());
console.log(computer.printConfiguration());
excerciseA();
