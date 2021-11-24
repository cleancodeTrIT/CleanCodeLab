/* eslint-disable no-magic-numbers */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */

export function getMinutesBetweenDates(first: Date, second: Date): number {
  // ❌ No complex expressions.
  // ❌ No magic numbers.
  const minutes = Math.floor(Math.abs(second.getTime() - first.getTime()) / 1000 / 60);
  return minutes;
}

export function isLeap_Conditionals(year: number): boolean {
  // ❌ avoid complex conditionals
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

export function isLeap_Ternaries(year: number): boolean {
  // ❌ avoid nested ternaries
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}
