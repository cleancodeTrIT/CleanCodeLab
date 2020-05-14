// ✔️ no nested blocks
// ✔️ reduce cyclomatic complexity
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  const composites: boolean[] = createAllNumbersAsNoComposites(TOTAL_NUMBERS);
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    if (isPrime(number, composites)) {
      primes.push(number);
      markItsMultiplesAsComposites(number, composites);
    }
  }
  return primes;
}

function createAllNumbersAsNoComposites(totalNumbers: number): boolean[] {
  return [...Array(totalNumbers).fill(false)];
}

function isPrime(number: number, composites: boolean[]): boolean {
  return composites[number] === false;
}

function markItsMultiplesAsComposites(prime: number, composites: boolean[]): void {
  const minimalMultiple = prime * prime;
  const limit = composites.length;
  for (let multiple = minimalMultiple; multiple <= limit; multiple += prime) {
    composites[multiple] = true;
  }
}

// ✔️ no complex arrows
export function getSquaredPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squaredPrimes = [];
  NATURAL_NUMBERS.filter(isPrimeNumber)
    .map(prime => prime * prime)
    .forEach(function processSquaredPrime(squaredPrime) {
      squaredPrimes.push(squaredPrime);
      console.log(`There are ${squaredPrimes.length} primes in the basket`);
    });
  return squaredPrimes;
}
function isPrimeNumber(number: number): boolean {
  const FIRST_PRIME = 2;

  const MAX_PRIME = Math.floor(Math.sqrt(number));
  let isPrime = number !== 1;
  for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
    if (isEvenlyDivisible(number, i)) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
function isEvenlyDivisible(number: number, current: number): boolean {
  const NULL_REMAINDER = 0;
  return number % current === NULL_REMAINDER;
}
