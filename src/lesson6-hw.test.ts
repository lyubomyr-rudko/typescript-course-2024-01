import { describe, expect, it } from '@jest/globals';

import {
  getCompanyNames,
  getCompanyWithLongestCatchPhrase,
  getUsersWithOrgWebsite,
  getCities,
  getUserNames,
} from './lesson6-homework';

import { users } from './lesson6-homework';

describe('getUserNames', () => {
  it('should return an array of user names with first name and last name', () => {
    const expectedNames = [
      { firstName: 'Mrs.', lastName: 'Dennis Schulist' },
      { firstName: 'Nicholas', lastName: 'Runolfsdottir V' },
    ];
    expect(getUserNames(users)).toEqual(expectedNames);
  });
});

describe('getCompanyNames', () => {
  it('should return an array of company names', () => {
    const expectedCompanyNames = ['Considine-Lockman', 'Abernathy Group'];
    expect(getCompanyNames(users)).toEqual(expectedCompanyNames);
  });
});

describe('getCompanyWithLongestCatchPhrase', () => {
  it('should return the name of the company with the longest catch phrase', () => {
    expect(getCompanyWithLongestCatchPhrase(users)).toEqual(
      'Considine-Lockman',
    );
  });
});

describe('getUsersWithOrgWebsite', () => {
  it('should return an array of users with websites ending in .org', () => {
    const usersWithOrgWebsite = getUsersWithOrgWebsite(users);
    expect(usersWithOrgWebsite.length).toEqual(1);
    expect(usersWithOrgWebsite[0].website).toEqual('ola.org');
  });
});

describe('getCities', () => {
  it('should return an array of city names sorted alphabetically', () => {
    const sortedCityNames = getCities(users);
    expect(sortedCityNames).toEqual(['Aliyaview', 'South Christy']);
  });
});
