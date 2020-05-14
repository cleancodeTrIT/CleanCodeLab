/* eslint-disable no-magic-numbers */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-const */
export function getDateStructure(date: Date): object {
  let year: number, month: number, day: number; // ❌ One variable or constant per line.
  const MONTHS_BASE = 1; // ❌ Constants before variables.
  // ❌ avoid null data
  year = date.getFullYear();
  month = date.getMonth() + MONTHS_BASE;
  day = date.getDate();
  return { year, month, day };
}

export function getMinutesBetweenDates(first: Date, second: Date): number {
  // ❌ No complex expressions.
  // ❌ No magic numbers.
  const minutes = Math.floor(Math.abs(second.getTime() - first.getTime()) / 1000 / 60);
  return minutes;
}

export function isLeapConditionals(year: number): boolean {
  // ❌ avoid complex conditionals
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

export function isLeapTernaries(year: number): boolean {
  // ❌ avoid nested ternaries
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}
