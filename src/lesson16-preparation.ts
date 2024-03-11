import * as fs from 'fs/promises';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 16 *********
// Structural Design Patterns

function lesson16() {
  // - Composite - when we have a tree structure and we want to treat the leafs and the nodes in the same way
  function compositDemo() {
    function before() {
      class Product {
        constructor(
          public title: string,
          public price: number,
          public weight: number,
        ) {}
      }

      class MultiProduct {
        private items: Product[] = [];

        public add(item: Product): void {
          this.items.push(item);
        }

        public remove(item: Product): void {
          const index = this.items.indexOf(item);
          this.items.splice(index, 1);
        }

        public getPrice(): number {
          return this.items.reduce((prev, curr) => prev + curr.price, 0);
        }

        public getWeight(): number {
          return this.items.reduce((prev, curr) => prev + curr.weight, 0);
        }
      }

      class MultiProductNested {
        private items: (Product | MultiProductNested)[] = [];

        public add(item: Product | MultiProductNested): void {
          this.items.push(item);
        }

        public remove(item: Product | MultiProductNested): void {
          const index = this.items.indexOf(item);
          this.items.splice(index, 1);
        }

        public getPrice(): number {
          return this.items.reduce((prev, curr) => {
            if (curr instanceof Product) {
              return prev + curr.price;
            }
            return prev + curr.getPrice();
          }, 0);
        }

        public getWeight(): number {
          return this.items.reduce((prev, curr) => {
            if (curr instanceof Product) {
              return prev + curr.weight;
            }
            return prev + curr.getWeight();
          }, 0);
        }
      }
    }
    before();

    function after() {
      /**
       * Need: Calculate the total price of a shipment of packages that can contain
       * other packages
       *
       * Solution: Create a common interface for the package that contains only
       * products (leafs) and the package that contains other packages
       */

      interface IProduct {
        getPrice(): number;
      }

      /**
       * The Product class only has the getPrice implementation
       */
      class Product implements IProduct {
        constructor(
          title: string,
          protected price: number,
        ) {}

        public getPrice(): number {
          return this.price;
        }
      }

      interface IProductPackage extends IProduct {
        add(packageComponent: IProduct): void;
        remove(packageComponent: IProduct): void;
      }

      /**
       * The ProductComposite class represents a complex package that
       * contains other packages
       */
      class ProductComposite implements IProductPackage {
        constructor(public title: string) {}

        protected childrenPackages: IProduct[] = [];

        public add(packageComponent: IProduct): void {
          this.childrenPackages.push(packageComponent);
        }

        public remove(packageComponent: IProduct): void {
          const index = this.childrenPackages.indexOf(packageComponent);
          this.childrenPackages.splice(index, 1);
        }

        public getPrice(): number {
          return this.childrenPackages.reduce(
            (prev, curr) => prev + curr.getPrice(),
            0,
          );
        }
      }

      /**
       * The client code always works with base Package components
       */
      const galaxyPackage: IProduct = getGalaxyS68Pack();
      const canonPackage: IProduct = getCanonM50Pack();
      const simpleHeadphonesPackage: IProduct = getHeadphones();

      const mainShipment: IProductPackage = new ProductComposite(
        'Main Shipment',
      );
      mainShipment.add(galaxyPackage);
      mainShipment.add(canonPackage);
      mainShipment.add(simpleHeadphonesPackage);

      console.log(`Total shipment cost: ${mainShipment.getPrice()}€`);

      /**
       * Helper (builder) functions hide there are 2 concrete package components
       */
      function getGalaxyS68Pack(): IProductPackage {
        const complexMobilePackage = new ProductComposite('Galaxy S68 Pack');
        complexMobilePackage.add(new Product('Galaxy S68', 900));
        complexMobilePackage.add(new Product('S68 Charger', 25));
        complexMobilePackage.add(new Product('S68 Case', 15));
        return complexMobilePackage;
      }

      function getCanonM50Pack(): IProductPackage {
        const complexCameraPackage = new ProductComposite('Canon M50 Pack');
        complexCameraPackage.add(new Product('Canon M50', 600));
        complexCameraPackage.add(new Product('A50 1.8 Lens', 250));
        complexCameraPackage.add(new Product('128 Gb Micro SD', 40));
        complexCameraPackage.add(new Product('Canon Generic Case', 150));
        return complexCameraPackage;
      }

      function getHeadphones(): IProduct {
        return new Product('HyperX Cloud Flight', 150);
      }
    }
    after();
  }
  compositDemo();

  // - Bridge
  function bridgeDemo() {
    // Bridge pattern - when we have two dimensions of changes and we want to separate them
    // the bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently"
    // example: RemoteControl and TV - abstraction (remote) and implementation (tv)
    // real code example: api endpoints and database - abstraction (api) and implementation (database)
    function before() {
      abstract class RemoteControl {
        public abstract turnOn(): void;
        public abstract turnOff(): void;
      }

      abstract class AdvancedRemoteControl extends RemoteControl {
        // set channel
        public abstract setChannel(volume: number): void;
      }

      // RmoteVoiceControl, RemoteGestureControl, RemoteTouchControl

      class SonyRemoteControl extends RemoteControl {
        public turnOn(): void {
          // Sony specific turn on
          console.log('Sony specific turn on');
        }
        public turnOff(): void {
          // Sony specific turn off
          console.log('Sony specific turn off');
        }
      }

      class SonyAdvancedRemoteControl extends AdvancedRemoteControl {
        public setChannel(volume: number): void {
          // Sony specific set channel
          console.log('Sony specific set channel');
        }
        public turnOn(): void {
          // Sony specific turn on
          console.log('Sony specific turn on');
        }
        public turnOff(): void {
          // Sony specific turn off
          console.log('Sony specific turn off');
        }
      }

      // every time we need to support new tv brand, we need to add 2 new classes
      // add new type of remote control, we need to add new classes for each type/brand

      // RemoteControl
      //   SonyRemoteControl
      //   SamsungRemoteControl
      //   LGRemoteControl
      //   AdvancedRemoteControl
      //     SonyAdvancedRemoteControl
      //     SamsungAdvancedRemoteControl
      //     LGAdvancedRemoteControl
      //
      // need to add new classes for each type/brand pair
      // two dimensions of changes
      // - type of remote control
      // - brand of TV
      // hard to maintain, and extend, code duplication
    }
    before();
    function after() {
      // solution: bridge pattern - separate the Abstraction from the Implementation
      // Feature hierarchy
      // - RemoteControl
      // - AdvancedRemoteControl
      // - VoiceRemoteControl
      // Brand hierarchy
      // - Sony
      // - Samsung
      // - LG
      // - Radio

      interface Device {
        turnOn(): void;
        turnOff(): void;
        setChannel(channel: number): void;
      }

      class SonyTv implements Device {
        public turnOn(): void {
          console.log('Sony TV is on');
        }
        public turnOff(): void {
          console.log('Sony TV is off');
        }
        public setChannel(channel: number): void {
          console.log(`Sony TV channel is set to ${channel}`);
        }
      }

      class SamsungTv implements Device {
        public turnOn(): void {
          console.log('Samsung TV is on');
        }
        public turnOff(): void {
          console.log('Samsung TV is off');
        }
        public setChannel(channel: number): void {
          console.log(`Samsung TV channel is set to ${channel}`);
        }
      }

      class LGTv implements Device {
        public turnOn(): void {
          console.log('LG TV is on');
        }
        public turnOff(): void {
          console.log('LG TV is off');
        }
        public setChannel(channel: number): void {
          console.log(`LG TV channel is set to ${channel}`);
        }
      }

      class Radio implements Device {
        public turnOn(): void {
          console.log('Radio is on');
        }
        public turnOff(): void {
          console.log('Radio is off');
        }
        public setChannel(channel: number): void {
          console.log(`Radio frequency is set to ${channel}`);
        }
      }

      interface Remote {
        turnOn(): void;
        turnOff(): void;
      }

      interface AdvancedRemote extends Remote {
        setChannel(channel: number): void;
      }

      interface VoiceRemote extends Remote {
        voiceControl(): void;
      }

      class RemoteControl implements Remote {
        protected device: Device;

        constructor(device: Device) {
          this.device = device;
        }

        public turnOn(): void {
          this.device.turnOn();
        }

        public turnOff(): void {
          this.device.turnOff();
        }
      }

      class AdvancedRemoteControl extends RemoteControl {
        constructor(device: Device) {
          super(device);
        }

        public setChannel(channel: number): void {
          this.device.setChannel(channel);
        }
      }

      class VoiceRemoteControl extends RemoteControl {
        constructor(device: Device) {
          super(device);
        }

        public voiceControl(): void {
          console.log('Voice control is enabled');
        }
      }

      const sonyTv = new SonyTv();
      const remoteControl = new RemoteControl(sonyTv);

      remoteControl.turnOn();
      remoteControl.turnOff();

      const samsungTv = new SamsungTv();
      const advancedRemoteControl = new AdvancedRemoteControl(samsungTv);

      advancedRemoteControl.turnOn();
      advancedRemoteControl.setChannel(5);
      advancedRemoteControl.turnOff();
    }
    after();
  }
  bridgeDemo();

  // - Adapter
  function adapterDemo() {
    /**
     *
     * Need: Interact with a Taxi price calculator that works with miles and £
     * with a client that provide Kms and expect a price in €.
     *
     * Solution: Create an adapter that translates the input and output values
     * into the expected formats.
     */

    /**
     * In this case, the target is an interface that the application is
     * compatible with
     */
    interface TaxiCalculator {
      calculatePriceInEuros(km: number, isAirport: boolean): number;
    }

    /**
     * The Adaptee is an existing library that contains the logic that we want
     * to reuse.
     */
    class UKTaxiCalculatorLibrary {
      public getPriceInPounds(miles: number, fare: Fares): number {
        if (fare === Fares.Airport) {
          return 5 + miles * 2.15;
        }
        return miles * 1.95;
      }
    }

    enum Fares {
      Standard,
      Airport,
    }

    /**
     * The Taxi Calculator Adapter makes the Adaptee's interface compatible
     * with the one that the client expects.
     */
    class UKTaxiCalculatorLibraryAdapter implements TaxiCalculator {
      constructor(private adaptee: UKTaxiCalculatorLibrary) {}

      calculatePriceInEuros(km: number, isAirport: boolean): number {
        const miles = km * 1.609;
        const fare = isAirport ? Fares.Airport : Fares.Standard;
        const pounds = this.adaptee.getPriceInPounds(miles, fare);
        const euros = pounds * 1.15;
        return euros;
      }
    }

    const incompatibleLibrary = new UKTaxiCalculatorLibrary();
    const adaptedLibrary = new UKTaxiCalculatorLibraryAdapter(
      incompatibleLibrary,
    );

    console.log('Calculating the price for a 15 Km run to the airport');
    const priceInEuros = adaptedLibrary.calculatePriceInEuros(15, true);
    console.log(`Total price: ${priceInEuros}€`);
  }
  adapterDemo();

  // - Proxy
  async function proxyDemo() {
    /**
     *
     * Need: Cache and log access to an external weather service SDK
     *
     * Solution: Create a proxy class to cache the SDK calls and log the requests
     */

    /**
     * The WeatherService defines the SDK interface and response
     */
    interface WeatherService {
      request(): Promise<WeatherForecast>;
    }

    interface WeatherForecast {
      avgTemperature: number;
      maxPrecipitationProbability: number;
    }

    /**
     * The real service emulates a network request to an external service with
     * a 1 second delay
     */
    class RealWeatherServiceSDK implements WeatherService {
      public async request(): Promise<WeatherForecast> {
        const randomWeatherForecast = {
          avgTemperature: Math.random() * 35,
          maxPrecipitationProbability: Math.random() * 100,
        };

        return new Promise((resolve) => {
          setTimeout(() => resolve(randomWeatherForecast), 1000);
        });
      }
    }

    /**
     * The Proxy implements the same interface than the real service. However
     * the proxy uses an internal cache to store responses. Subsequent calls to the
     * proxied service will go faster as they won't call the real slow service. The
     * proxy also logs useful information about the cache usage and timmings.
     */
    class ProxyWeatherService implements WeatherService {
      private cachedResponse!: WeatherForecast;
      private cacheDate!: Date;
      private expirationTimeInMillis = 24 * 60 * 60 * 1000; // 24 hours

      constructor(private realWeatherService: WeatherService) {}

      public async request(): Promise<WeatherForecast> {
        console.log(`Requesting forecast on date ${new Date().toISOString()}.`);
        const initialTime = Date.now();
        if (this.isCacheExpired()) {
          console.log('Invalid cache. Calling real weather service...');
          this.setCache(await this.realWeatherService.request());
        }
        const requestTimeInMillis = Date.now() - initialTime;
        console.log(`Request processed in ${requestTimeInMillis} milliseconds`);
        return this.cachedResponse;
      }

      private isCacheExpired(): boolean {
        return this.cachedResponse
          ? Date.now() > this.cacheDate.getTime() + this.expirationTimeInMillis
          : true;
      }

      private setCache(weatherForecast: WeatherForecast) {
        this.cachedResponse = weatherForecast;
        this.cacheDate = new Date();
      }
    }

    /**
     * The client code works with real and proxied services
     */
    async function clientCode(weatherService: WeatherService) {
      for (let i = 0; i < 3; i += 1) {
        const weatherForecast = await weatherService.request();
        console.log(
          `The weather forecast is ${weatherForecast.avgTemperature}º average temperature and ${weatherForecast.maxPrecipitationProbability}% max precipitation probability.`,
        );
      }
    }

    console.log(
      'Client: Executing the client code with a real weather service:',
    );
    const realWeatherService = new RealWeatherServiceSDK();
    await clientCode(realWeatherService);

    console.log('');

    console.log(
      'Client: Executing the same client code with a proxied weather service:',
    );
    const proxy = new ProxyWeatherService(realWeatherService);
    await clientCode(proxy);
  }
  proxyDemo();

  // - Facade
  function facadeDemo() {
    /**
     * Facade pattern for a ETL process.
     * In this demo we have three subsystems.
     * The first one is the Loader (DataSource), which is a file system.
     * The second one is the Parser (DataTransformer), which is a string parser.
     * The third one is the Writer (DataSink), which is a file system.
     */

    type Map = { [key: string]: any };

    interface Extractor {
      extract(): Promise<string>;
    }

    interface Transformer {
      transform(input: string): Map;
    }

    interface Loader {
      load(input: Map): Promise<any>;
    }

    class FileExtractor implements Extractor {
      filepath: string;
      constructor(filepath: string) {
        this.filepath = filepath;
      }

      public async extract() {
        //load file from this.filepath
        return fs.readFile(this.filepath, 'utf8');
      }
    }

    class FileLoader implements Loader {
      filepath: string;
      constructor(filepath: string) {
        this.filepath = filepath;
      }
      public async load(input: Map) {
        return fs.writeFile(this.filepath, JSON.stringify(input, undefined, 4));
      }
    }

    class FileTransformer implements Transformer {
      public transform(input: string): Map {
        const result: Map = {};

        input.split('\n').forEach((line) => {
          if (line.trim().length === 0) return;

          const [key] = line.split(',');

          if (typeof result[key] === 'undefined') {
            result[key] = 0;
          }
          result[key] = result[key] + 1;
        });

        return result;
      }
    }

    /**
     * The Facade class is the main class of the Facade pattern.
     * It's responsible for creating the subsystems and calling their methods.
     * It is injecting the subsystems in the constructor.
     * In the process method its calling the extract, transform and load methods of the subsystems.
     */
    class ETLProcessor {
      extractor: Extractor;
      transformer: Transformer;
      loader: Loader;

      constructor(
        extractor: Extractor,
        transformer: Transformer,
        loader: Loader,
      ) {
        this.extractor = extractor;
        this.transformer = transformer;
        this.loader = loader;
      }

      public async process() {
        const input = await this.extractor.extract();
        const transformed = this.transformer.transform(input);
        return this.loader.load(transformed);
      }
    }

    const processor = new ETLProcessor(
      new FileExtractor('input.txt'),
      new FileTransformer(),
      new FileLoader('output.json'),
    );

    processor.process().then(() => {
      console.log('Process completed');
    });
  }
  facadeDemo();

  // - Decorator
  function decoratorDemo() {
    /**
     * Need: Add telemetry to an existing controller
     *
     * Solution: Create a decorator that adds the telemetry logic
     */
    interface ControllerRequest {
      url: string;
      method: string;
      data?: any;
    }

    interface ControllerResponse {
      status: number;
      data: any;
    }

    interface Controller {
      process(req: ControllerRequest): Promise<ControllerResponse>;
    }

    class UserController implements Controller {
      public process(req: ControllerRequest): Promise<ControllerResponse> {
        const users = [
          { id: 1, name: 'John' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Alice' },
        ];

        const response: ControllerResponse = {
          status: 200,
          data: {},
        };

        if (req.method === 'GET') {
          response.data = users;
        } else {
          response.status = 400;
          response.data = {
            message: 'Bad request',
          };
        }

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 200);
        });
      }
    }

    class Decorator implements Controller {
      protected controller: Controller;

      constructor(controller: Controller) {
        this.controller = controller;
      }

      public process(req: ControllerRequest): Promise<ControllerResponse> {
        return this.controller.process(req);
      }
    }

    class TelemetryDecorator extends Decorator {
      public async process(
        req: ControllerRequest,
      ): Promise<ControllerResponse> {
        const start = new Date().getTime();

        const result = await super.process(req);

        const end = new Date().getTime();
        const time = end - start;

        /**
         * If you want, you can save this telemetry data in a log file
         */
        console.log(`${req.url} ${req.method} => ${time}ms`);

        return result;
      }
    }

    const userController = new TelemetryDecorator(new UserController());
    userController.process({ url: '/users', method: 'GET' });
  }
  decoratorDemo();

  // - Flyweight
  function flyweightDemo() {
    // Flyweight pattern - when we have a lot of objects that would consume a lot of memory
    // and so - we want to share the same objects
    // example: text editor - when we have a lot of the same characters
    function before() {
      class Point {
        private x: number;
        private y: number;
        private type: string;
        private iconSVG: string[];

        constructor(x: number, y: number, type: string, icon: string[]) {
          this.x = x;
          this.y = y;
          this.type = type;
          this.iconSVG = icon;
        }

        public draw() {
          console.log(
            `Drawing a point at (${this.x}, ${this.y}) with type ${this.type}`,
          );
          console.log(`Icon: ${this.iconSVG.join('')}`);
        }
      }

      class PointService {
        getPoints(): Point[] {
          const points: Point[] = [];

          points.push(new Point(1, 2, 'open', ['<svg>']));
          points.push(new Point(3, 4, 'edit', ['<svg>']));

          return points;
        }
      }

      const pointService = new PointService();
      const points = pointService.getPoints();
      points.forEach((point) => point.draw());

      // the problem is that we have a lot of the same points
      // and on some devices(like mobile) it crushes
    }
    before();
    function after() {
      // PointIcon is a flyweight - because it is consuming a lot of memory when created
      class PointIcon {
        color: string;
        iconSVG: string[];

        constructor(color: string, icon: string[]) {
          this.color = color;
          this.iconSVG = icon;
        }
      }

      class Point {
        private x: number;
        private y: number;
        private icon: PointIcon;

        constructor(x: number, y: number, icon: PointIcon) {
          this.x = x;
          this.y = y;
          this.icon = icon;
        }

        public draw() {
          console.log(
            `Drawing a point at (${this.x}, ${this.y}) with color ${this.icon.color}`,
          );
          console.log(`Icon: ${this.icon.iconSVG.join('')}`);
        }
      }

      class PointIconFactory {
        private icons: { [key: string]: PointIcon } = {};

        public getPointIcon(type: string): PointIcon {
          if (!this.icons[type]) {
            this.icons[type] = new PointIcon(type, ['<svg>']);
          }

          return this.icons[type];
        }
      }
    }
    after();
  }
  flyweightDemo();
}
lesson16();

const test = 'test';
export default test;
