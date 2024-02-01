import {
  getUserNames,
  // getLongestCatchPhaseCompany,
  // getOrgWebsites,
  // getCityes,
  // IUser,
  // ICompany,
} from './lesson6-homework';
import fetch1 from './lesson6-mock-1';
// import fetch2 from './lesson6-mock-2';
// import fetch3 from './lesson6-mock-3';

console.log('fetch1: ', typeof fetch1);

describe('excerciseB fetch data:', () => {
  // beforeAll(() => {
  // const mock: unknown = jest.fn().mockReturnValue(fetch1);
  // .mockReturnValueOnce(fetch2)
  // .mockReturnValueOnce(fetch3)
  // });

  afterAll(() => {
    jest.resetAllMocks();
  });

  //==============================================
  it('getCompanyNames is load', () => {
    expect(getUserNames).toBeDefined();
  });

  // it('getCompanyNames for fetch1', () => {
  //   console.log('MOCK: ', mock);

  //   const res1 = [
  //     'Huels and Sons',
  //     'Kuhic - Predovic',
  //     'Krajcik Inc',
  //     'Bruen Inc',
  //     'Wilderman and Sons',
  //     'Walker LLC',
  //     'Lowe, Armstrong and Orn',
  //     'Satterfield, Aufderhar and Bauch',
  //     'Weissnat - Cartwright',
  //     'Collins - Langosh',
  //     'Green and Sons',
  //     'Heathcote Inc',
  //     'Waelchi - Huel',
  //     'Jacobson LLC',
  //     'Volkman, Fisher and Schimmel',
  //   ];
  //   expect(getUserNames(mock as IUser)).toEqual(res1);
  // });

  // //==============================================
  // it('getLongestCatchPhaseCompany is load', () => {
  //   expect(getLongestCatchPhaseCompany).toBeDefined();
  // });

  // it('getLongestCatchPhaseCompany result for fetch1', () => {
  //   const res1 = 'Bruen Inc';
  //   expect(getLongestCatchPhaseCompany(mock)).toBe(res1);
  // });

  // //==============================================
  // it('getOrgWebsites is load', () => {
  //   expect(getOrgWebsites).toBeDefined();
  // });

  // it('getOrgWebsites result for fetch1', () => {
  //   const res1 = [
  //     'Pete Dare',
  //     'Jack Gerlach',
  //     'Wilfred Graham-Jenkins',
  //     'Amy Flatley Jr.',
  //   ];
  //   expect(getOrgWebsites(mock)).toEqual(res1);
  // });

  // //==============================================
  // it('getCityes is load', () => {
  //   expect(getCityes).toBeDefined();
  // });

  // it('getCityes result for fetch1', () => {
  //   const res1 = [
  //     'Carson',
  //     'Cordellborough',
  //     'Ewaldville',
  //     'Feeneyfurt',
  //     'Fort Darronworth',
  //     'Greensboro',
  //     'Gresham',
  //     'Haltom City',
  //     'Harrisonburg',
  //     'Hicksville',
  //     'Hilarioborough',
  //     'Lake Hailey',
  //     'New Abbyland',
  //     'Philadelphia',
  //     'Wymanfurt',
  //   ];
  //   expect(getCityes(mock)).toEqual(res1);
  // });
});
