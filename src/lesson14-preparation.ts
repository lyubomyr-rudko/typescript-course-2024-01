
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ********* Lesson 14 *********

function lesson14() {
  // // OOP
  // // Objects - group of properties and methods
  // // Classes - blueprint for objects
  // //
  // // Inheritance - code reuse method. Parent class and child class. Extends other class
  // // Polymorphism - many forms - mayny implementations of the same interface. Extends abstract class. Implement interface
  // interface IActor {
  //   doit(): void;
  // }
  // class User implements IActor {
  //   doit() {
  //     console.log('User doit');
  //   }
  // }
  // class Admin extends User {}
  // class Dialog extends React.Component {
  //   private user = new User();
  //   doit() {
  //     this.user.doit();
  //   }
  //   render() {
  //     return (<div><Header/><Body/><Footer/></div>)
  //   }
  // }
  // function Dialog2({header, foolter, body}) {
  //   // header.doit();
  //   return (<div>{header}{body}{footer}</div>)
  // }
  // function HomePage() {
  //   return (
  //     <Dialog2 header={<Header/>} footer={<Footer/>} body={<Body/>} />
  //   )
  // }
  // class SuperWidget extends Widget {}
  // class ApiRole implements IActor {
  //   doit() {
  //     console.log('ApiRole doit');
  //   }
  // }
  // const user: IActor = {
  //   doit() {
  //     console.log('User doit');
  //   },
  // };
  // // Encapsulation - hiding complexity -
  // // Abstraction - data hiding
  // // Composition - has-a
  // //
  // // DRY vs WET
  // // KISS
  // // YAGNI
  // //
  // // SOLID principles - clean code, uncle Bob, Robert C. Martin
  // // Single Responsibility Principle - one class should have one responsibility, one reason to change
  // // should do one thing and do it well
  // // Open-Closed Principle
  // // Liskov Substitution Principle - derived class should be able to replace its base class
  // class Rectangle {
  //   width: number;
  //   height: number;
  //   constructor(width: number, height: number) {
  //     this.width = width;
  //     this.height = height;
  //   }
  //   getArea() {
  //     return this.width * this.height;
  //   }
  //   getPerimeter() {
  //     return 2 * (this.width + this.height);
  //   }
  //   setWidth(width: number) {
  //     this.width = width;
  //   }
  //   setHeight(height: number) {
  //     this.height = height;
  //   }
  // }
  // class Square extends Rectangle {
  //   constructor(size: number) {
  //     super(size, size);
  //   }
  //   setWidth(width: number) {
  //     this.width = width;
  //     this.height = width;
  //   }
  //   setHeight(height: number) {
  //     this.width = height;
  //     this.height = height;
  //   }
  // }
  // abstract class Shape {
  //   abstract getArea(): number;
  //   abstract getPerimeter(): number;
  // }
  // class Rectangle2 extends Shape {
  //   width: number;
  //   height: number;
  //   constructor(width: number, height: number) {
  //     super();
  //     this.width = width;
  //     this.height = height;
  //   }
  //   getArea() {
  //     return this.width * this.height;
  //   }
  //   getPerimeter() {
  //     return 2 * (this.width + this.height);
  //   }
  // }
  // class Square2 extends Shape {
  //   size: number;
  //   constructor(size: number) {
  //     super();
  //     this.size = size;
  //   }
  //   getArea() {
  //     return this.size * this.size;
  //   }
  //   getPerimeter() {
  //     return 4 * this.size;
  //   }
  // }
  // // Interface Segregation Principle - many client-specific interfaces are better than one general-purpose interface
  // interface IUser {
  //   id: number;
  //   firstName: string;
  //   lastName: string;
  //   maidenName: string;
  //   age: number;
  //   gender: string;
  //   email: string;
  //   phone: string;
  //   username: string;
  //   password: string;
  //   birthDate: string;
  //   image: string;
  //   bloodGroup: string;
  //   height: number;
  //   weight: number;
  //   eyeColor: string;
  //   hair: {
  //     color: string;
  //     type: string;
  //   };
  //   domain: string;
  //   ip: string;
  //   address: {
  //     address: string;
  //     city: string;
  //     coordinates: {
  //       lat: number;
  //       lng: number;
  //     };
  //     postalCode: string;
  //     state: string;
  //   };
  //   macAddress: string;
  //   university: string;
  //   bank: {
  //     cardExpire: string;
  //     cardNumbers: string[];
  //     cardType: string;
  //     currency: string;
  //     iban: string;
  //   };
  //   company: {
  //     address: {
  //       address: string;
  //       city: string;
  //       coordinates: {
  //         lat: number;
  //         lng: number;
  //       };
  //       postalCode: string;
  //       state: string;
  //     };
  //     department: string;
  //     name: string;
  //     title: string;
  //   };
  //   ein: string;
  //   ssn: string;
  //   userAgent: string;
  // }
  // interface ISimpleUser {
  //   id: number;
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   image: string;
  // }
  // interface IUserListProps {
  //   users: {
  //     id: number;
  //     firstName: string;
  //     lastName: string;
  //     age: number;
  //     image: string;
  //   }[];
  // }
  // function UserList({users}: IUserListProps) {
  //   return (
  //     <div>
  //       {users.map((user) => (
  //         <User user={user} />
  //       ))}
  //     </div>
  //   );
  // }
  // function User({user}: {user: IUser}) {
  //   return (
  //     <div>
  //       <div>{user.firstName}</div>
  //       <div>{user.lastName}</div>
  //       <div>{user.age}</div>
  //       <div>{user.image}</div>
  //     </div>
  //   );
  // }
  // //
  // // Dependency Inversion Principle
  // //
  // // React with Typescript - complex hooks
  // // useDebugValue
  // // Custom Hooks
}
lesson14();

const test = 'test';
export default test;
