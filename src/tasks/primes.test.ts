/* eslint-disable no-magic-numbers */
// ❌ import { primeFactors } from "./bad-primes";
// ✔️ Refactored
import { getPrimeFactors } from './primes_ok';

describe('primeFactors', () => {
  test('returns an empty array for 1', () => expect(getPrimeFactors(1)).toEqual([]));

  test('factors 2', () => expect(getPrimeFactors(2)).toEqual([2]));

  test('factors 3', () => expect(getPrimeFactors(3)).toEqual([3]));

  test('factors 4', () => expect(getPrimeFactors(4)).toEqual([2, 2]));

  test('factors 6', () => expect(getPrimeFactors(6)).toEqual([2, 3]));

  test('factors 8', () => expect(getPrimeFactors(8)).toEqual([2, 2, 2]));

  test('factors 9', () => expect(getPrimeFactors(9)).toEqual([3, 3]));

  test('factors 27', () => expect(getPrimeFactors(27)).toEqual([3, 3, 3]));

  test('factors 625', () => expect(getPrimeFactors(625)).toEqual([5, 5, 5, 5]));

  test('factors 901255', () => expect(getPrimeFactors(901255)).toEqual([5, 17, 23, 461]));
});
