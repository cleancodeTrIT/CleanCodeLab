const PRIME = true;
const COMPOSITE = false;
// ✔️ no nested blocks
// ✔️ reduce cyclomatic complexity
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  const numbersKind: boolean[] = createAllNumbersAsPrimes(TOTAL_NUMBERS);
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    if (isPrime(number, numbersKind)) {
      primes.push(number);
      markItsMultiplesAsComposites(number, numbersKind);
    }
  }
  return primes;
}

function createAllNumbersAsPrimes(totalNumbers: number): boolean[] {
  const numbersKind: boolean[] = new Array(totalNumbers);
  numbersKind.fill(PRIME);
  return numbersKind;
}

function isPrime(number: number, numbersKind: boolean[]): boolean {
  return numbersKind[number] === PRIME;
}

function markItsMultiplesAsComposites(prime: number, numbersKind: boolean[]): void {
  const minimalMultiple = prime * prime;
  const limit = numbersKind.length;
  for (let multiple = minimalMultiple; multiple <= limit; multiple += prime) {
    numbersKind[multiple] = COMPOSITE;
  }
}

// ✔️ no complex arrows
export function getSquaredOfPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squaredPrimes = [];

  NATURAL_NUMBERS.filter(isPrimeNumber) // use functional programming // using a pointer to a function declaration
    .map(prime => prime * prime) // using an arrow function expression
    .forEach(function processSquaredPrime(squaredPrime) {
      // using a function declaration
      // ✔️ same levels os abstraction
      savePrime(squaredPrimes, squaredPrime);
      printProcess(squaredPrime);
      printTotals(squaredPrimes);
    });

  return squaredPrimes;
}
// function declaration
function isPrimeNumber(number: number): boolean {
  const FIRST_PRIME = 2;
  // ✔️ guard for early return
  if (number < FIRST_PRIME) return false;
  // ✔️ no complex logic
  const maxPrime = getMaxPossiblePrime(number);
  let isPrime = true;
  for (let i = FIRST_PRIME; i <= maxPrime; i++) {
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
function getMaxPossiblePrime(number) {
  const squareRoot = Math.sqrt(number);
  const lowerInteger = Math.floor(squareRoot);
  return lowerInteger;
}
function savePrime(squaredPrimes, squaredPrime) {
  squaredPrimes.push(squaredPrime);
}
function printProcess(number) {
  console.log(`Added ${number} as the square of a prime number`);
}
function printTotals(squaredPrimes) {
  console.log(`Calculated ${squaredPrimes.length} primes`);
}
