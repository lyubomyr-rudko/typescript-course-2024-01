export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/creational-patterns
// Answer the following questions:
// 1. Which creational pattern to use when we have family of different kind of objects that created according to some condition, for example - different databases maybe supported: Oracle, SQLServer, H2
// 2. Which creational pattern to use when we want to create only one instance of a class?
// 3. Which creational pattern to use when creation of the object is very time consuming, and we want to be able to duplicate the object?
// 4. Which creational pattern to use when we need to pass a lot of parameters to the constructor and some of these parameters are completely irrelevant for the specific configuration of the object?
// Answers:
// 1. Abstract Factory Pattern
// 2. Singleton Pattern
// 3. Prototype Pattern
// 4. Builder Pattern
// function excerciseA() {
//   // Observe this implementation class ConfigurationManager, which is responsible for reading and writing configuration data.
//   class ConfigManager {
//     private config: {
//       [key: string]: string | number;
//     };
//
//     constructor() {
//       this.config = {};
//     }
//
//     // Method to get a config parameter
//     getConfig(key: string) {
//       return this.config[key];
//     }
//
//     // Method to set a config parameter
//     setConfig(key: string, value: string | number) {
//       this.config[key] = value;
//     }
//   }
//   // It should be possible to create only one instance of this class.
//   // Use one of the GoF patterns to implement this requirement.
//   // Rewrite the class to use the standard implementation of that pattern.
//   //
//   // Update the way of creating the instance of the class ConfigurationManager
//   const configManager = new ConfigManager();
//   configManager.setConfig('name', 'John');
//   console.log(configManager.getConfig('name'));
// }
// excerciseA();

function exerciseA() {
  // Solving task using the Singleton pattern:
  class ConfigManager {
    private static instance?: ConfigManager;
    private readonly config: {
      [key: string]: string | number;
    };

    private constructor() {
      this.config = {};
    }

    // Method to get a config parameter
    getConfig(key: string) {
      return this.config[key];
    }

    // Method to set a config parameter
    setConfig(key: string, value: string | number) {
      this.config[key] = value;
    }

    // Singleton instance creation method
    public static getInstance(): ConfigManager {
      if (!ConfigManager.instance) {
        ConfigManager.instance = new ConfigManager();
      }
      return ConfigManager.instance;
    }
  }

  // Update the way of creating the instance of the class ConfigurationManager
  const configManager = ConfigManager.getInstance();
  configManager.setConfig('name', 'John');
  console.log(configManager.getConfig('name'));
}

exerciseA();
