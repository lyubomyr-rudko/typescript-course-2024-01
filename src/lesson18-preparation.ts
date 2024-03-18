/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 18 *********
// Behavioral Design Patterns

function lesson18() {
  // - Template Method
  function templateMethodDemo() {
    abstract class House {
      buildhouse() {
        this.constructBase();
        this.constructWalls();
        this.constructRoof();
        this.constructWindows();
        this.constructDoors();
        this.paintHouse();
        this.decorateHouse();
      }

      abstract decorateHouse(): void;
      abstract paintHouse(): void;
      abstract constructDoors(): void;
      abstract constructWindows(): void;
      abstract constructWalls(): void;

      constructRoof() {
        console.log('Roof has been constructed.');
      }

      constructBase() {
        console.log('Base has been constructed.');
      }
    }

    class ConcreteWallHouse extends House {
      decorateHouse() {
        console.log('Decorating Concrete Wall House');
      }

      paintHouse() {
        console.log('Painting Concrete Wall House');
      }

      constructDoors() {
        console.log('Constructing Doors for Concrete Wall House');
      }

      constructWindows() {
        console.log('Constructing Windows for Concrete Wall House');
      }

      constructWalls() {
        console.log('Constructing Concrete Wall for my House');
      }
    }

    class GlassWallHouse extends House {
      decorateHouse() {
        console.log('Decorating Glass Wall House');
      }

      paintHouse() {
        console.log('Painting Glass Wall House');
      }

      constructDoors() {
        console.log('Constructing Doors for Glass Wall House');
      }

      constructWindows() {
        console.log('Constructing Windows for Glass Wall House');
      }

      constructWalls() {
        console.log('Constructing Glass Wall for my House');
      }
    }

    // how to use
    class TemplateMethodTest {
      static test() {
        console.log('Going to build Concrete Wall House');

        let house: House = new ConcreteWallHouse();
        house.buildhouse();

        console.log('Concrete Wall House constructed successfully');

        console.log('********************');

        console.log('Going to build Glass Wall House');

        house = new GlassWallHouse();
        house.buildhouse();

        console.log('Glass Wall House constructed successfully');
      }
    }

    // widget example
    abstract class Widget {
      renderWidget(): void {
        this.requestData();
        this.renderHeader();
        this.renderLoading();
        this.renderBody();
        this.renderFooter();
      }

      abstract requestData(): void;
      abstract renderHeader(): void;
      abstract renderLoading(): void;
      abstract renderBody(): void;
      abstract renderFooter(): void;
    }

    class WeatherWidget extends Widget {
      requestData() {
        console.log('Requesting weather data');
      }

      renderHeader() {
        console.log('Rendering weather header');
      }

      renderLoading() {
        console.log('Rendering weather loading');
      }

      renderBody() {
        console.log('Rendering weather body');
      }

      renderFooter() {
        console.log('Rendering weather footer');
      }
    }

    class NewsWidget extends Widget {
      requestData() {
        console.log('Requesting news data');
      }

      renderHeader() {
        console.log('Rendering news header');
      }

      renderLoading() {
        console.log('Rendering news loading');
      }

      renderBody() {
        console.log('Rendering news body');
      }

      renderFooter() {
        console.log('Rendering news footer');
      }
    }
  }
  templateMethodDemo();

  // - Mediator
  function mediatorDemo() {
    /**
     * Need: To have a messaging application to notify groups of users. Users
     * should not know about each other.
     *
     * Solution: Create a mediator to manage subscriptions and messages
     */

    // The observer pattern: Class A, can have zero or more observers of type O registered with it.
    // When something in A is changed it notifies all of the observers.

    // The mediator pattern: You have some number of instances of class X (or maybe even several different types:X, Y & Z),
    // and they wish to communicate with each other (but you don't want each to have explicit references to each other),
    // so you create a mediator class M. Each instance of X has a reference to a shared instance of M, through which it
    // can communicate with the other instances of X (or X, Y and Z).

    /**
     * Extending the Mediator interface to have a payload to include messages
     */
    interface Mediator {
      notify(sender: object, event: string, payload?: string): void;
    }

    /**
     * The user plays the role of the independent component. It has an
     * instance of the mediator.
     */
    class User {
      constructor(
        public name: string,
        private mediator: Mediator,
      ) {
        this.mediator.notify(this, 'subscribe');
      }

      receiveMessage(message: string) {
        console.log(`Message received by ${this.name}: ${message}`);
      }

      publishMessage(message: string) {
        this.mediator.notify(this, 'publish', message);
      }
    }

    /**
     * The app is the concrete Mediator and implements all the events that
     * collaborators can notify: subscribe and publish
     */
    class ChatAppMediator implements Mediator {
      private users: User[] = [];

      public notify(sender: object, event: string, payload?: string): void {
        if (event === 'subscribe') {
          const user = sender as User;
          console.log(`Subscribing ${user.name}`);
          this.users.push(user);
        }

        if (event === 'publish') {
          console.log(`Publishing message "${payload}" to the group`);
          const usersExcludingSender = this.users.filter((u) => u !== sender);
          for (const user of usersExcludingSender) {
            user.receiveMessage(payload || '');
          }
        }
      }
    }

    /**
     * The client code. Creating a user automatically subscribes them to the
     * group.
     */
    const chatAppMediator = new ChatAppMediator();
    const user1 = new User('Lightning', chatAppMediator);
    const user2 = new User('Doc', chatAppMediator);
    const user3 = new User('Mater', chatAppMediator);

    user1.publishMessage('Catchaw');
    user2.publishMessage('Ey kid');
    user3.publishMessage('Tomato');
  }
  mediatorDemo();

  // - Command
  function commandDemo() {
    function example1() {
      function before() {
        class Light {
          private _isOn: boolean = false;

          turnOn() {
            console.log('Light -> turnOn');
            this._isOn = true;
          }

          turnOff() {
            console.log('Light -> turnOff');
            this._isOn = false;
          }

          isOn(): boolean {
            return this._isOn;
          }
        }
        class Room {
          private _light: Light;

          constructor() {
            this._light = new Light();
          }

          turnLightOnOff() {
            if (this._light.isOn()) {
              console.log('Room -> turnLightOnOff');
              this._light.turnOn();
            } else {
              console.log('Room -> turnOffLight');
              this._light.turnOff();
            }
          }
        }

        class KitchenRoom extends Room {
          // private _oven: Oven;
        }

        class BathroomRoom extends Room {
          // private _shower: Shower;
        }

        class LivingRoom extends Room {
          // private _tv: Television;
        }

        class Bedroom extends Room {
          // private _musicPlayer: MusicPlayer;
        }

        class House {
          public rooms: Room[] = [];

          public addRoom(room: Room) {
            this.rooms.push(room);
          }
        }

        const house = new House();
        house.addRoom(new KitchenRoom());
        house.addRoom(new BathroomRoom());
        house.addRoom(new LivingRoom());
        house.addRoom(new Bedroom());
        house.rooms.forEach((room) => room.turnLightOnOff());

        // problems - if we want to add a new light we have to change all the code
      }
      before();

      function after() {
        class Light {
          _isOn: boolean = false;

          toggle() {
            console.log('Light -> toggle');
            this._isOn = !this._isOn;
          }
        }

        // extract the call to the light to a command

        interface ICommand {
          execute(): void;
        }
        class LightCommand implements ICommand {
          private _light: Light;

          constructor(light: Light) {
            this._light = light;
          }

          execute() {
            this._light.toggle();
          }
        }

        class Room {
          private _lightCommand: ICommand;

          constructor(lightCommand: ICommand) {
            this._lightCommand = lightCommand;
          }

          turnLightOnOff() {
            this._lightCommand.execute();
          }
        }

        class KitchenRoom extends Room {
          // private _ovenCommand: ICommand;
        }

        class BathroomRoom extends Room {
          // private _showerCommand: ICommand;
        }

        class LivingRoom extends Room {
          // private _tvCommand: ICommand;
        }

        class Bedroom extends Room {
          // private _musicPlayerCommand: ICommand;
        }

        class House {
          public rooms: Room[] = [];

          public addRoom(room: Room) {
            this.rooms.push(room);
          }
        }

        const house = new House();
        const kitchenRoom = new KitchenRoom(new LightCommand(new Light()));
        house.addRoom(kitchenRoom);
        const bathroomRoom = new BathroomRoom(new LightCommand(new Light()));
        house.addRoom(bathroomRoom);
        const livingRoom = new LivingRoom(new LightCommand(new Light()));
        house.addRoom(livingRoom);

        house.rooms.forEach((room) => room.turnLightOnOff());
      }
      after();
    }
    example1();

    function example2() {
      class Television {
        adjustVolumeUp() {
          console.log('TV -> adjustVolumeUp');
        }

        adjustVolumeDown() {
          console.log('TV -> adjustVolumeDown');
        }

        powerOff() {
          console.log('TV -> powerOff');
        }
      }

      interface Command {
        execute(): void;
      }

      class VolumeUpCommand implements Command {
        private tv: Television;

        constructor(tv: Television) {
          this.tv = tv;
        }

        public execute(): void {
          this.tv.adjustVolumeUp();
        }
      }

      class RemoteControlButton {
        private command!: Command;

        public setCommand(command: Command): void {
          this.command = command;
        }

        public buttonClicked(): void {
          this.command.execute();
        }
      }

      class VolumeDownCommand implements Command {
        private tv: Television;

        constructor(tv: Television) {
          this.tv = tv;
        }

        public execute(): void {
          this.tv.adjustVolumeDown();
        }
      }

      class PowerOffCommand implements Command {
        private tv: Television;

        constructor(tv: Television) {
          this.tv = tv;
        }

        public execute(): void {
          this.tv.powerOff();
        }
      }

      class RemoteControl {
        public volumeUpButton: RemoteControlButton;
        public volumeDownButton: RemoteControlButton;
        public powerOffButton: RemoteControlButton;

        constructor(tv: Television) {
          this.volumeUpButton = new RemoteControlButton();
          this.volumeDownButton = new RemoteControlButton();
          this.powerOffButton = new RemoteControlButton();

          this.volumeUpButton.setCommand(new VolumeUpCommand(tv));
          this.volumeDownButton.setCommand(new VolumeDownCommand(tv));
          this.powerOffButton.setCommand(new PowerOffCommand(tv));

          this.powerOffButton.buttonClicked();
        }
      }

      new RemoteControl(new Television());
    }
    example2();
  }
  commandDemo();
}
lesson18();

const test = 'test';
export default test;
