/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
/* eslint-disable no-magic-numbers */
// import { getErrorMessage, Words, writeMessageLog } from './functions_bad';
import { countWords, getErrorMessage } from './functions_ok';

describe('getErrorMessage()', () => {
  test('shows message when there is an error and form was touched', () => {
    const error = { required: true };
    const formWasTouched = true;
    const expectedError = JSON.stringify(error);
    expect(getErrorMessage(error, formWasTouched)).toEqual(expectedError);
  });
  test('do not show message when there is no error ', () => {
    const error = null;
    const formWasTouched = true;
    const expectedError = '';
    expect(getErrorMessage(error, formWasTouched)).toEqual(expectedError);
  });
  test('do not show message when the form was not touched ', () => {
    const error = { required: true };
    const formWasTouched = false;
    const expectedError = '';
    expect(getErrorMessage(error, formWasTouched)).toEqual(expectedError);
  });
});

describe('words()', () => {
  test('throw error on null or undefined', () => {
    expect(() => {
      countWords(null);
    }).toThrow();
  });

  test('counts empty', () => {
    const expectedCounts = {};
    expect(countWords('  ')).toEqual(expectedCounts);
  });

  test('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(countWords('word')).toEqual(expectedCounts);
  });

  test('counts one of each', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(countWords('one of each')).toEqual(expectedCounts);
  });

  test('counts multiple occurrences', () => {
    const expectedCounts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1,
    };
    expect(countWords('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  test('includes punctuation', () => {
    const expectedCounts = {
      car: 1,
      ':': 2,
      carpet: 1,
      as: 1,
      java: 1,
      'javascript!!&@$%^&': 1,
    };
    expect(countWords('car : carpet as java : JavaScript!!&@$%^&')).toEqual(expectedCounts);
  });

  test('includes numbers', () => {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(countWords('testing 1 2 testing')).toEqual(expectedCounts);
  });

  test('normalizes to lower case', () => {
    const expectedCounts = { go: 3 };
    expect(countWords('go Go GO')).toEqual(expectedCounts);
  });

  test('counts properly international characters', () => {
    const expectedCounts = {
      '¡hola!': 1,
      '¿qué': 1,
      'tal?': 1,
      'привет!': 1,
    };
    expect(countWords('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  test('counts multiline', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(countWords('hello\nworld')).toEqual(expectedCounts);
  });

  test('counts tabs', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(countWords('hello\tworld')).toEqual(expectedCounts);
  });

  test('counts multiple spaces as one', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(countWords('hello  world')).toEqual(expectedCounts);
  });

  test('does not count leading or trailing whitespace', () => {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(countWords('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  test('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = {
      reserved: 1,
      words: 1,
      like: 1,
      tostring: 1,
      'ok?': 1,
    };
    expect(countWords('reserved words like toString ok?')).toEqual(expectedCounts);
  });
});
