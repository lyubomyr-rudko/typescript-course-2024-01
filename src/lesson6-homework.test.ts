import { describe, expect, it } from '@jest/globals';
import {
  getCompanyNames,
  usersArr,
  getLongerCatchPhrase,
  getWebsiteEndinOrg,
  getListCities,
} from './lesson6-homework';

describe('getCompanyNames', () => {
  it('should be defined', () => {
    expect(getCompanyNames).toBeDefined();
  });
  it('return company name', () => {
    const expected = [
      'Romaguera-Crona',
      'Deckow-Crist',
      'Romaguera-Jacobson',
      'Robel-Corkery',
      'Keebler LLC',
      'Considine-Lockman',
      'Johns Group',
      'Abernathy Group',
      'Yost and Sons',
      'Hoeger LLC',
    ];
    expect(getCompanyNames(usersArr)).toEqual(expected);
  });
});
describe('getLongerCatchPhrase', () => {
  it('should be defined', () => {
    expect(getLongerCatchPhrase).toBeDefined();
  });
  it('return longer phrase', () => {
    const expected = 'Multi-tiered zero tolerance productivity';
    expect(getLongerCatchPhrase(usersArr)).toEqual(expected);
  });
});

describe('getWebsiteEndinOrg', () => {
  it('should be defined', () => {
    expect(getWebsiteEndinOrg).toBeDefined();
  });
  it('return websire includes ord', () => {
    const expected = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: [Object],
        },
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        address: {
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          city: 'South Christy',
          zipcode: '23505-1337',
          geo: [Object],
        },
        website: 'ola.org',
        company: {
          name: 'Considine-Lockman',
          catchPhrase: 'Synchronised bottom-line interface',
          bs: 'e-enable innovative applications',
        },
      },
    ];
    expect(getWebsiteEndinOrg(usersArr)).toStrictEqual(expected);
  });
});
describe('getListCities', () => {
  it('should be defined', () => {
    expect(getListCities).toBeDefined();
  });
  it('return list cities', () => {
    const expected = [
      'Aliyaview',
      'Bartholomebury',
      'Gwenborough',
      'Howemouth',
      'Lebsackbury',
      'McKenziehaven',
      'Roscoeview',
      'South Christy',
      'South Elvis',
      'Wisokyburgh',
    ];
    expect(getListCities(usersArr)).toEqual(expected);
  });
});
