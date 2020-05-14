// 👓 https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/tasks

// ✔️
export function getPrimeFactors(limit: number): number[] {
  const SMALLEST_PRIME = 2;
  const NULL_REMAINDER = 0;
  const primeFactors = [];
  let testingFactor = SMALLEST_PRIME;
  while (limit >= SMALLEST_PRIME) {
    if (limit % testingFactor === NULL_REMAINDER) {
      primeFactors.push(testingFactor);
      limit /= testingFactor;
    } else {
      testingFactor++;
    }
  }
  return primeFactors;
}
