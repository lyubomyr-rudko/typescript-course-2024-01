import {
  fetchUsers,
  mockUsers,
  getCompanyNames,
  getCompanyWithLongestCatchPhrase,
  getUsersWithOrgWebsite,
  getSortedUsersCityNames,
} from './lesson6-homework';

describe('fetchUsers', () => {
  it('fetches successfully data from an API', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockUsers),
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

    fetchMock.mockRestore();
  });
});

describe('getCompanyName', () => {
  it('should extract company names from user objects', () => {
    const expectedNames = ['Considine-Lockman', 'Abernathy Group'];
    expect(getCompanyNames(mockUsers)).toEqual(expectedNames);
  });
});

describe('getCompanyNameWithLongestCatchPhrase', () => {
  it('should return the company with the longest catch phrase', () => {
    expect(getCompanyWithLongestCatchPhrase(mockUsers)).toBe(
      'Considine-Lockman',
    );
  });

  it('should throw an error if the users array is empty', () => {
    expect(() => getCompanyWithLongestCatchPhrase([])).toThrow(
      'Array of users should not be empty',
    );
  });
});

describe('getUsersWithDotOrgWebsites', () => {
  it('should filter users with .org websites', () => {
    const expectedUsers = [mockUsers[0]];
    expect(getUsersWithOrgWebsite(mockUsers)).toEqual(expectedUsers);
  });
});

describe('getSortedUsersCityNames', () => {
  it('should return sorted city names of users', () => {
    const expectedCities = ['Aliyaview', 'South Christy'];
    expect(getSortedUsersCityNames(mockUsers)).toEqual(expectedCities);
  });
});
