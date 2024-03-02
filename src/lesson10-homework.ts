// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/objects.html
// 2. https://www.typescriptlang.org/docs/handbook/2/generics.html
// 3. https://www.typescriptlang.org/docs/handbook/2/classes.html

// import { string } from 'prop-types';

// Use lookup types
function exercise42() {
  // imagine you have a list of products received from the API
  // and you need to display the location coordinates of every product's warehouse
  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        {
          url: 'https://i.dummyjson.com/data/products/1/1.jpg',
          title: 'user photo 1',
        },
        {
          url: 'https://i.dummyjson.com/data/products/1/2.jpg',
          title: 'user photo 2',
        },
      ],
      warehouse: {
        address: {
          address: '629 Debbie Drive',
          city: 'Nashville',
          coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
          },
          postalCode: '37076',
          state: 'TN',
        },
        name: "Blanda-O'Keefe",
        phoneNumbers: ['1-615-843-3426', '1-615-843-3427'],
      },
    },
  ];
  // TODO: for a given products data, implement a single TProduct type, write type annotation for every property
  type TProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: {
      url: string;
      title: string;
    }[];

    warehouse: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      name: string;
      phoneNumbers: string[];
      // TOOD: add remaining missing properties types, list each of them explicitly
    };
  };

  // TODO: create a type TCoodinates that represents coordinates, using lookup type from TProduct
  //  (product->warehouse->address->coordinates)
  // TODO: remove this eslint-disable-next-line comment

  type TCoordinates = TProduct['warehouse']['address']['coordinates'];

  // TODO: fix/add type annotation for the function (remove `any` type annotation)
  // TODO: remove this eslint-disable-next-line comment

  function printProductLocationCoordinates(coordinates: TCoordinates) {
    // NOTE: this could be using google map api to display the location on the map, but for now just console.log
    console.log(coordinates.lat);
    console.log(coordinates.lng);
  }

  printProductLocationCoordinates(products[0].warehouse.address.coordinates);

  // you also need a function which returns a phone number of given product's warehouse
  // TODO: add return type annotation using lookup type, instead of hardcoded string type

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getProductWarehousePhoneNumber(
    product: TProduct,
  ): TProduct['warehouse']['phoneNumbers'][0] {
    // TODO: fix the return value to be a type of a phone number for the product warehouse
    // HINT: use lookup types, and the result for that should equal to string type
    // TODO: make sure the function gets a phone number from product object
    console.log(product.warehouse.phoneNumbers[0]);
    return product.warehouse.phoneNumbers[0];
  }

  getProductWarehousePhoneNumber(products[0]);
}
exercise42();

// Use keyof type operators
function exercise43() {
  // TODO: implement functions to get and set property of an object in type safe way
  // TODO: for type sefty use generics and keyof type operator to ensure that key is a valid property of the object
  function getProperty<T>(obj: T, key: keyof T) {
    console.log('getProperty', obj[key]);

    return obj[key];
  }

  // TODO: use generics and lookup type, add types T, K and use T[K] for value param type
  function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
    console.log('setProperty', obj, key, obj[key]);
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'admin',
  };
  getProperty(user, 'role'); // admin
  setProperty(user, 'role', 'user');
}
exercise43();

// Use conditional types
function exercise44() {
  // TODO: create a coditional type that will check if the type is a primitive type (unites all string, number, boolean)
  // TODO: if the type is primitive, return literal type 'primitive'
  // TODO: if the type is not primitive, return literal type 'not primitive'
  type TIsPrimitive<T> = T extends string | number | boolean
    ? 'primitive'
    : 'not promitive';

  // TODO uncomment the following lines
  type T1 = TIsPrimitive<number>; // hint: should be 'primitive'
  type T2 = TIsPrimitive<string>;
  type T3 = TIsPrimitive<0>;
  // type T4 = TIsPrimitive<{}>; // hint: should be 'not primitive'
  // type T5 = TIsPrimitive<Function>; // hint: should be 'not primitive'

  const t123: T1 | T2 | T3 = 'primitive';
  console.log(t123);
}
exercise44();

// Use conditional types with unions and never
function exercise45() {
  // TODO: create a type that excludes number from a union type
  type ExcludeNumberFromType<T> = T extends number ? never : T; // TODO: modify this line, replace with your code

  type TNumberOrString = number | string;

  type TExcludeNumberFromType = ExcludeNumberFromType<TNumberOrString>; // Hint - should equal to string

  // TODO: uncomment the following lines and make sure there are no errors
  const a: TExcludeNumberFromType = 'test';
  console.log(a);
}
exercise45();
