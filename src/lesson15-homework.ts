export {};

// Read all articlas from https://refactoring.guru/uk/design-patterns/creational-patterns
// Answer the following questions:
// 1. Which creational pattern to use when we have family of different kind of objects that created according to some condition, for example - different databases maybe supported: Oracle, SQLServer, H2
// мабуть абстрактна фабрика?
// 2. Which creational pattern to use when we want to create only one instance of a class?
// singletone
// 3. Which creational pattern to use when creation of the object is very time consuming, and we want to be able to duplicate the object?
// прототип?
// 4. Which creational pattern to use when we need to pass a lot of parameters to the constructor and some of these parameters are completely irrelevant for the specific configuration of the object?
//  фабрика?

function excerciseA() {
  // Observe this implementation class ConfigurationManager, which is responsible for reading and writing configuration data.
  class ConfigManager {
    private config: {
      [key: string]: string | number;
    };

    constructor() {
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
  }
  // Update the way of creating the instance of the class ConfigurationManager
  const configManager1 = new ConfigManager();
  configManager1.setConfig('name', 'John');
  console.log(configManager1.getConfig('name'));
  // It should be possible to create only one instance of this class.
  // Use one of the GoF patterns to implement this requirement.
  // Rewrite the class to use the standard implementation of that pattern.
  //
  class ConfigManagerOnce {
    private static instance: ConfigManagerOnce;

    private config: {
      [key: string]: string | number;
    };

    private constructor() {
      this.config = {};
    }

    // Static method to get the instance of ConfigManager
    public static getInstance(): ConfigManagerOnce {
      if (!ConfigManagerOnce.instance) {
        ConfigManagerOnce.instance = new ConfigManagerOnce(); // Create the instance if it doesn't exist
      }
      return ConfigManagerOnce.instance;
    }

    // Method to get a config parameter
    public getConfig(key: string) {
      return this.config[key];
    }

    // Method to set a config parameter
    public setConfig(key: string, value: string | number) {
      this.config[key] = value;
    }
  }
  // Update the way of creating the instance of the class ConfigurationManager
  const configManager2 = ConfigManagerOnce.getInstance();
  configManager2.setConfig('name', 'Stan');
  console.log(configManager2.getConfig('name'));
}
excerciseA();
