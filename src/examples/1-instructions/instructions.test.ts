/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import * as year from './instructions_ok';
import { getDateStructure, getMinutesBetweenDates } from './instructions_ok';

describe('Get date structure from date object', () => {
  test('get the Structure of a Date', () => {
    const date = new Date('2020-02-29');

    expect(getDateStructure(date)).toEqual({
      year: 2020,
      month: 2,
      day: 29,
    });
  });
});

describe('Get Minutes Between Dates', () => {
  test('get the deference of two dates in minutes', () => {
    const first = new Date('2020-02-29');
    const second = new Date('2020-02-27');

    expect(getMinutesBetweenDates(first, second)).toEqual(2880);
  });
});

describe('A leap year', () => {
  test('year not divisible by 4 in common year', () => {
    expect(year.isLeap(2015)).toBe(false);
  });

  test('year divisible by 2, not divisible by 4 in common year', () => {
    expect(year.isLeap(1970)).toBe(false);
  });

  test('year divisible by 4, not divisible by 100 in leap year', () => {
    expect(year.isLeap(1996)).toBe(true);
  });

  test('year divisible by 4 and 5 is still a leap year', () => {
    expect(year.isLeap(1960)).toBe(true);
  });

  test('year divisible by 100, not divisible by 400 in common year', () => {
    expect(year.isLeap(2100)).toBe(false);
  });

  test('year divisible by 100 but not by 3 is still not a leap year', () => {
    expect(year.isLeap(1900)).toBe(false);
  });

  test('year divisible by 400 in leap year', () => {
    expect(year.isLeap(2000)).toBe(true);
  });

  test('year divisible by 400 but not by 125 is still a leap year', () => {
    expect(year.isLeap(2400)).toBe(true);
  });

  test('year divisible by 200, not divisible by 400 in common year', () => {
    expect(year.isLeap(1800)).toBe(false);
  });
});
