import { describe, expect, it } from '@jest/globals';
import {
  getCompanyNames,
  getCompanyWithLongestCatchPhrase,
  getUsersWithOrgWebsite,
  getSortedCities,
} from './hw6-function';

describe('getCompanyNames', () => {
  it('should not throw an error', async () => {
    const users = await fetchUsers();

    expect(() => getCompanyNames(users)).not.toThrow();
  });
});

describe('getCompanyWithLongestCatchPhrase', () => {
  it('should not throw an error', async () => {
    const users = await fetchUsers();

    expect(() => getCompanyWithLongestCatchPhrase(users)).not.toThrow();
  });
});

describe('getUsersWithOrgWebsite', () => {
  it('should not throw an error', async () => {
    const users = await fetchUsers();

    expect(() => getUsersWithOrgWebsite(users)).not.toThrow();
  });
});

describe('getSortedCities', () => {
  it('should not throw an error', async () => {
    const users = await fetchUsers();

    expect(() => getSortedCities(users)).not.toThrow();
  });
});

async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const users = await res.json();
    return users;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
