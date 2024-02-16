import { IAddress } from './lesson6-intreface-merging-lib';

declare module './lesson6-intreface-merging-lib' {
  interface IAddress {
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }
}

const address: IAddress = {
  city: 'test',
  zipcode: 'test',
  geo: {
    lat: 'test',
    lng: 'test',
  },
  street: 'test',
  suite: 'test',
};

console.log(address);
