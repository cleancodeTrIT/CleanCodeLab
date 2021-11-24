// ✔️ better naming
function getStringWithOddNumbersReversed(source: number[]): string {
  // ✔️ same level of abstraction
  const odds: number[] = filterOddNumbers(source);
  const reversed: number[] = getReversedArray(odds);
  const reversedString = storeArrayInString(reversed);
  return reversedString;
}

// ✔️ one responsibility => minimal, reusable functions

function filterOddNumbers(source: number[]): number[] {
  return source.filter(n => n % 2 === 1);
}

function getReversedArray(source: number[]): number[] {
  const reversed: number[] = [];
  const lastIndex = source.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    reversed.push(source[i]);
  }
  return reversed;
}

function storeArrayInString(source: number[]): string {
  let stringArray = '';
  source.forEach(n => (stringArray += n));
  return stringArray;
}
