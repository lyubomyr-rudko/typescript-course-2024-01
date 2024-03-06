// Read the following typescript documentation:
// 1. https://www.typescriptlang.org/docs/handbook/2/objects.html
// 2. https://www.typescriptlang.org/docs/handbook/2/generics.html
// 3. https://www.typescriptlang.org/docs/handbook/2/classes.html

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
    };
  };

  type TCoordinates = TProduct['warehouse']['address']['coordinates'];

  function printProductLocationCoordinates(coordinates: TCoordinates) {
    // NOTE: this could be using google map api to display the location on the map, but for now just console.log
    console.log(coordinates.lat);
    console.log(coordinates.lng);
  }

  printProductLocationCoordinates(products[0].warehouse.address.coordinates);

  function getProductWarehousePhoneNumber(
    product: TProduct,
  ): TProduct['warehouse']['phoneNumbers'][number] {
    return product.warehouse.phoneNumbers[0];
  }

  getProductWarehousePhoneNumber(products[0]);
}
exercise42();

// Use keyof type operators
function exercise43() {
  function getProperty<T>(obj: T, key: keyof T): T[keyof T] {
    console.log('getProperty', obj[key]);

    return obj[key];
  }

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
  type TIsPrimitive<T> = T extends object ? 'not primitive' : 'primitive';

  // TODO uncomment the following lines
  // type T1 = TIsPrimitive<number>; // hint: should be 'primitive'
  // type T2 = TIsPrimitive<string>;
  // type T3 = TIsPrimitive<0>;
  // type T4 = TIsPrimitive<{}>; // hint: should be 'not primitive'
  // type T4 = TIsPrimitive<Function>; // hint: should be 'not primitive'
}
exercise44();

// Use conditional types with unions and never
function exercise45() {
  type ExcludeNumberFromType<T> = T extends number ? never : T;

  type TNumberOrString = number | string;

  type TExcludeNumberFromType = ExcludeNumberFromType<TNumberOrString>; // Hint - should equal to string

  const a: TExcludeNumberFromType = 'test';
  console.log(a);
}
exercise45();

export default {
  test: 'test',
};
