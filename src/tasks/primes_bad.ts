// 👓 https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/tasks
/* eslint-disable no-magic-numbers */

export function primes(nmbr: number): number[] {
  const result = [];
  let i = 2;
  while (nmbr > 1) {
    if (nmbr % i === 0) {
      result.push(i);
      nmbr /= i;
    } else {
      i++;
    }
  }
  return result;
}
