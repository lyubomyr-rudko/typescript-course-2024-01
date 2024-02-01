import { describe, expect, it } from '@jest/globals';

import {
  fetchUsers,
  mockedUsers,
  getLongestCompany,
  getUserCities,
  getUserCompanies,
  getUserNames,
  getUsersWithOrgDomen,
} from './lesson6-homework';

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockedUsers),
        }),
      ) as jest.Mock,
    );

    const data = await fetchUsers();

    expect(fetchMock).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(Array.isArray(data)).toEqual(true);
    expect(data.length).not.toEqual(0);
    expect(data).toStrictEqual(mockedUsers);

    fetchMock.mockRestore();
  });
});

describe('getUserNames', () => {
  it('get array of user names', () => {
    expect(getUserNames(mockedUsers)).toEqual([
      { firstName: 'Leanne', lastName: 'Graham' },
      { firstName: 'Ervin', lastName: 'Howell' },
      { firstName: 'Clementine', lastName: 'Bauch' },
      { firstName: 'Patricia', lastName: 'Lebsack' },
      { firstName: 'Chelsey', lastName: 'Dietrich' },
      { firstName: 'Mrs.', lastName: 'Dennis' },
      { firstName: 'Kurtis', lastName: 'Weissnat' },
      { firstName: 'Nicholas', lastName: 'Runolfsdottir' },
      { firstName: 'Glenna', lastName: 'Reichert' },
      { firstName: 'Clementina', lastName: 'DuBuque' },
    ]);
  });

  it('array length is not 0', () => {
    expect(getUserNames(mockedUsers).length).not.toEqual(0);
  });

  it('if array of users is empty --> return empty array', () => {
    expect(getUserNames([])).toEqual([]);
  });
});

describe('getUserCompanies', () => {
  it('get array of company names', () => {
    expect(getUserCompanies(mockedUsers)).toEqual([
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
    ]);
  });

  it('array length is not 0', () => {
    expect(getUserCompanies(mockedUsers).length).not.toEqual(0);
  });
});

describe('getLongestCompany', () => {
  it('return the longest company name', () => {
    expect(getLongestCompany(mockedUsers)).toEqual('Robel-Corkery');
  });

  it('name is not empty', () => {
    expect(getLongestCompany(mockedUsers).length).not.toEqual(0);
  });
});

describe('getUsersWithOrgDomen', () => {
  it('returns a list of users that have website ending with .org', () => {
    expect(getUsersWithOrgDomen(mockedUsers)).toEqual([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
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
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          city: 'South Christy',
          zipcode: '23505-1337',
          geo: {
            lat: '-71.4197',
            lng: '71.7478',
          },
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
          name: 'Considine-Lockman',
          catchPhrase: 'Synchronised bottom-line interface',
          bs: 'e-enable innovative applications',
        },
      },
    ]);
  });

  it('array length is not 0', () => {
    expect(getLongestCompany(mockedUsers).length).not.toEqual(0);
  });
});

describe('getUserCities', () => {
  it('list of cities where users live, sorted by city name', () => {
    expect(getUserCities(mockedUsers)).toEqual([
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
    ]);
  });

  it('array length is not 0', () => {
    expect(getUserCities(mockedUsers).length).not.toEqual(0);
  });
});
