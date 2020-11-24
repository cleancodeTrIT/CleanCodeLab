/* eslint-disable no-magic-numbers */
// ❌
import { primes } from './primes_bad';
// ✔️ Refactored
// import { getPrimeFactors } from './primes_ok';

describe('primeFactors', () => {
  test('returns an empty array for 1', () => expect(primes(1)).toEqual([]));

  test('factors 2', () => expect(primes(2)).toEqual([2]));

  test('factors 3', () => expect(primes(3)).toEqual([3]));

  test('factors 4', () => expect(primes(4)).toEqual([2, 2]));

  test('factors 6', () => expect(primes(6)).toEqual([2, 3]));

  test('factors 8', () => expect(primes(8)).toEqual([2, 2, 2]));

  test('factors 9', () => expect(primes(9)).toEqual([3, 3]));

  test('factors 27', () => expect(primes(27)).toEqual([3, 3, 3]));

  test('factors 625', () => expect(primes(625)).toEqual([5, 5, 5, 5]));

  test('factors 901255', () => expect(primes(901255)).toEqual([5, 17, 23, 461]));
});
