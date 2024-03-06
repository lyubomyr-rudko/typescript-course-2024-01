/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 15 *********

function lesson15() {
  // Design Patterns overview
  // Creational Patterns
  // - Singleton
  // - Builder
  // - Prototype
  // - Factory

  // https://refactoring.guru/uk/design-patterns/creational-patterns
  // https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns

  function singletonDemo() {
    class Singleton {
      private static instance: Singleton;

      private constructor() {
        // connect to db
        // or open file
      }

      public static getInstance(): Singleton {
        if (!Singleton.instance) {
          Singleton.instance = new Singleton();
        }

        return Singleton.instance;
      }
    }

    // const instance = new Singleton(); // Error: constructor is private

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
      console.log('----EQUALS----');
    } else {
      console.log('--------NOT EQUALS------');
    }
  }
  singletonDemo();

  function builderDemo() {
    // The intent of the Builder design pattern is to separate the construction of a complex object from its representation.
    // By doing so, the same construction process can create different representations.[1]

    // Advantages of the Builder pattern include:[3]
    // 1. Allows you to vary a product's internal representation.
    // 2. Encapsulates code for construction and representation.
    // 3. Provides control over steps of construction process.

    interface Builder {
      producePartA(): void;
      producePartB(): void;
      producePartC(): void;
    }

    class ConcreteBuilder1 implements Builder {
      private product!: Product1;

      constructor() {
        this.reset();
      }

      public reset(): void {
        this.product = new Product1();
      }

      public producePartA(): void {
        this.product.parts.push('PartA1');
      }

      public producePartB(): void {
        this.product.parts.push('PartB1');
      }

      public producePartC(): void {
        this.product.parts.push('PartC1');
      }

      public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
      }
    }

    class Product1 {
      public parts: string[] = [];
      public listParts(): void {
        console.log(`Product parts : ${this.parts.join(', ')}\n`);
      }
    }

    class Director {
      private builder!: Builder;

      public setBuilder(builder: Builder): void {
        this.builder = builder;
      }

      public buildMinimalViableProduct(): void {
        this.builder.producePartA();
      }

      public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
      }
    }

    const Client = (director: Director) => {
      const builder = new ConcreteBuilder1();
      director.setBuilder(builder);

      console.log('Standard basic product : ');
      director.buildMinimalViableProduct();
      builder.getProduct().listParts();

      console.log('Standard full featured product : ');
      director.buildFullFeaturedProduct();
      builder.getProduct().listParts();

      console.log('custom product : ');
      builder.producePartA();
      builder.producePartC();
      builder.getProduct().listParts();
    };

    const director = new Director();
    Client(director);
  }
  builderDemo();

  function prototypeDemo() {
    class Prototype {
      private primitive: string | number | boolean | null = null;
      public component!: Date;
      public circularReference!: ComponentWithBackReference;

      constructor(primitive: string | number | boolean | null = null) {
        this.component = new Date();
        this.circularReference = new ComponentWithBackReference(this);
        this.primitive = primitive;
      }

      public clone(): Prototype {
        const clone = new Prototype();

        clone.component = this.component;
        clone.circularReference = new ComponentWithBackReference(clone);
        clone.primitive = this.primitive;

        return clone;
      }
    }

    class ComponentWithBackReference {
      public prototype;
      constructor(prototype: Prototype) {
        this.prototype = prototype;
      }
    }

    function clientCode() {
      const p1 = new Prototype(246);
      p1.component = new Date();
      p1.circularReference = new ComponentWithBackReference(p1);

      const p2 = p1.clone();

      if (p1.component === p2.component) {
        console.log('component not copied.');
      } else {
        console.log('component copied.');
      }

      if (p1.circularReference === p2.circularReference) {
        console.log('circularReference not copied.');
      } else {
        console.log('circularReference copied.');
      }

      if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('back ref is linked to original.');
      } else {
        console.log('back ref is linked to clone.');
      }
    }

    clientCode();
  }
  prototypeDemo();

  function factoryDemo() {
    abstract class Pizza {
      abstract prepare(): void;
      abstract bake(): void;
      abstract cut(): void;
      abstract box(): void;
    }

    class CheesePizza extends Pizza {
      prepare() {
        console.log('---Prepare CheesePizza-----');
      }

      bake() {
        console.log('---Bake CheesePizza-----');
      }

      cut() {
        console.log('---Cut CheesePizza-----');
      }

      box() {
        console.log('---Box CheesePizza-----');
      }
    }

    class PepperoniPizza extends Pizza {
      prepare() {
        console.log('---Prepare PepperoniPizza-----');
      }

      bake() {
        console.log('---Bake PepperoniPizza-----');
      }

      cut() {
        console.log('---Cut PepperoniPizza-----');
      }

      box() {
        console.log('---Box PepperoniPizza-----');
      }
    }

    class ClamPizza extends Pizza {
      prepare() {
        console.log('---Prepare ClamPizza-----');
      }

      bake() {
        console.log('---Bake ClamPizza-----');
      }

      cut() {
        console.log('---Cut ClamPizza-----');
      }

      box() {
        console.log('---Box ClamPizza-----');
      }
    }

    class VeggiePizza extends Pizza {
      prepare() {
        console.log('---Prepare VeggiePizza-----');
      }

      bake() {
        console.log('---Bake VeggiePizza-----');
      }

      cut() {
        console.log('---Cut VeggiePizza-----');
      }

      box() {
        console.log('---Box VeggiePizza-----');
      }
    }

    class PizzaStoreBad {
      public constructor() {}

      public orderPizza(type: string) {
        let pizza: Pizza | null = null;
        // this code is not good because if we add a new type of pizza we need to change this code
        // also this code is not reusable - in case we need to create another store, it will duplicate
        if (type === 'cheese') {
          pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
          pizza = new PepperoniPizza();
        } else if (type === 'clam') {
          pizza = new ClamPizza();
        } else if (type === 'veggie') {
          pizza = new VeggiePizza();
        }

        if (pizza) {
          pizza.prepare();
          pizza.bake();
          pizza.cut();
          pizza.box();
        }
      }
    }

    class PizzaTesterBad {
      public constructor() {}

      public testPizza(type: string) {
        let pizza: Pizza | null = null;
        // this code is not good because if we add a new type of pizza we need to change this code
        // also this code is not reusable - in case we need to create another store, it will duplicate
        if (type === 'cheese') {
          pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
          pizza = new PepperoniPizza();
        } else if (type === 'clam') {
          pizza = new ClamPizza();
        } else if (type === 'veggie') {
          pizza = new VeggiePizza();
        }

        if (pizza) {
          pizza.prepare();
          pizza.bake();
          pizza.cut();
          pizza.box();
        }
      }
    }

    class Factory {
      public createPizza(type: string): Pizza {
        let pizza: Pizza | null = null;

        if (type === 'cheese') {
          pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
          pizza = new PepperoniPizza();
        } else if (type === 'clam') {
          pizza = new ClamPizza();
        } else if (type === 'veggie') {
          pizza = new VeggiePizza();
        } else {
          throw new Error('Unknown pizza type');
        }

        return pizza;
      }

      //   public createSalad(type: string): Salad {
      //     let salad: Salad | null = null;

      //     if (type === 'cheese') {
      //       salad = new CheeseSalad();
      //     } else if (type === 'pepperoni') {
      //       salad = new PepperoniSalad();
      //     } else if (type === 'clam') {
      //       salad = new ClamSalad();
      //     } else if (type === 'veggie') {
      //       salad = new VeggieSalad();
      //     } else {
      //       throw new Error('Unknown salad type');
      //     }

      //     return salad;
      //   }
    }

    class PizzaStore {
      public factory: Factory;

      public constructor(factory: Factory) {
        this.factory = factory;
      }

      public orderPizza(type: string) {
        const pizza = this.factory.createPizza(type);

        if (pizza) {
          pizza.prepare();
          pizza.bake();
          pizza.cut();
          pizza.box();
        }
      }
    }

    const client = new PizzaStore(new Factory());
    // client.orderPizza("cheese");
    client.orderPizza('pepperoni');
  }
  factoryDemo();

  function abstractFactoryDemo() {
    /**
     * The Abstract Factory Interface.
     * In this interface we define the methods that return the abstract products of
     * a family.
     * In this example, a family is a manufacturer that produces various products.
     */
    interface DeviceFactory {
      createSmartphone(): Smartphone;

      createTablet(): Tablet;

      //   createLaptop(): Laptop;
    }

    /**
     * Concrete Factory.
     * Concrete factories must implement the Abstract Factory interface. Each
     * factory produces various products that belong to the same family
     * (e.g. Apple Factory that produces its own products).
     */
    class AppleFactory implements DeviceFactory {
      /**
       * The signature of each method is the abstract type of the product that is
       * returning by the method. It guarantees that the client will work with
       * products through abstraction.
       */
      public createSmartphone(): Smartphone {
        return new AppleSmartphone();
      }

      public createTablet(): Tablet {
        return new AppleTablet();
      }
    }

    /**
     * Another Concrete Factory. We can create an arbitrary amount of facotories.
     * The client will interact with factories through their interface and isn't
     * aware of which concrete factory is passed to it.
     */
    class SamsungFactory implements DeviceFactory {
      public createSmartphone(): Smartphone {
        return new SamsungSmartphone();
      }

      public createTablet(): Tablet {
        return new SamsungTablet();
      }
    }

    /**
     * Products Interface.
     * We define an interface for each distinct product. All concrete products must
     * implement their related interface.
     * The below interface is for Tablets and must be implemented by the tablets in
     * each family.
     */
    interface Tablet {
      /**
       * We define the operations that are common across all tablets
       */
      switchOn(): boolean;
    }

    /**
     * Another Product interface.
     * It includes the set of methods that are common between smartphones
     */
    interface Smartphone {
      switchOn(): boolean;
      ring(): void;
    }

    /**
     * Concrete Products. Each concrete product implements its respective interface
     * and will be created within their respective concrete factories.
     * The below product is a Samsung smartphone and then will be created in
     * SamsungFactory factory.
     */
    class SamsungSmartphone implements Smartphone {
      public switchOn(): boolean {
        console.log('Samsung Smartphone: Switching on');

        return true;
      }

      public ring() {
        console.log('Samsung Smartphone: Ringing');
      }
    }

    /**
     * Another concrete product. Apple Smartphones that will be created in the
     * AppleFactory factory
     */
    class AppleSmartphone implements Smartphone {
      public switchOn(): boolean {
        console.log('Apple Smartphone: Switching on');

        return true;
      }

      public ring() {
        console.log('Apple Smartphone: Ringing');
      }
    }

    /**
     * Apple tablets that will be created in its respective factory
     */
    class AppleTablet implements Tablet {
      public switchOn(): boolean {
        console.log('Apple Tablet: Switching on');

        return true;
      }
    }

    /**
     * And another product. We can create an arbitrary amount of products if their
     * interface exists and being used in their factories.
     */
    class SamsungTablet implements Tablet {
      public switchOn(): boolean {
        console.log('Samsung Tablet: Switching on');

        return true;
      }
    }

    /**
     * The client.
     * The client code will work with factories and products only through abstraction.
     * This allows us to pass any kind of factories to the client and work with any
     * kind of products without breaking the client code.
     */
    function client(factory: DeviceFactory) {
      // As we can see, the client isn't aware of which factory is working with
      const smartphone = factory.createSmartphone();
      smartphone.ring();

      const tablet = factory.createTablet();

      tablet.switchOn();
    }

    /**
     * The application and configurations will decide which concrete factory should
     * be passed to the client
     */
    client(new SamsungFactory());

    // Samsung Smartphone: Ringing
    // Samsung Tablet: Switching on
  }
  abstractFactoryDemo();
}
lesson15();

const test = 'test';
export default test;
