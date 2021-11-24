// ❌ multiple responsibilities
// ❌ high level and low level logic mixed
// ❌ incorrect name
function printOnlyOddNumbers(numbers: number[]): string {
  let odds: number[];
  const rev: number[] = [];
  odds = numbers.filter(n => n % 2);
  for (let i = odds.length - 1; i >= 0; i--) {
    rev.push(numbers[i]);
  }
  let sb = '';
  for (let i = 0; i < rev.length; i++) {
    sb += rev[i];
  }
  return sb;
}
