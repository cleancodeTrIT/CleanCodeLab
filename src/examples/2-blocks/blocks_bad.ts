/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-depth */
/* eslint-disable complexity */
// ❌
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  // ❌ avoid complex expressions
  const composites: boolean[] = [...Array(TOTAL_NUMBERS).fill(false)];
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    // ❌ avoid complex conditionals
    if (!composites[number]) {
      primes.push(number);
      // ❌ avoid deep nesting
      for (let multiple = number * number; multiple < TOTAL_NUMBERS; multiple += number) {
        composites[multiple] = true;
      }
    }
  }
  return primes;
}

// ❌ three arrows
export function getSquaredOfPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const squaredPrimes = [];

  NATURAL_NUMBERS.filter(n => {
    const FIRST_PRIME = 2;
    const NULL_REMAINDER = 0;
    const MAX_PRIME = Math.floor(Math.sqrt(n)); // ❌ complex logic
    let isPrime = n !== 1;
    for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
      // ❌ avoid complex conditionals
      if (n % i === NULL_REMAINDER) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  })
    .map(n => n * n)
    .forEach(n => {
      // ❌ levels os abstraction
      squaredPrimes.push(n);
      console.log(`Added ${n} as the square of a prime number`);
      console.log(`Calculated ${squaredPrimes.length} primes`);
    });
  return squaredPrimes;
}
