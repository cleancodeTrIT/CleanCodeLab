/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
/* eslint-disable no-magic-numbers */
// import { getErrorMessage, Words, writeMessageLog } from './functions_bad';
import { getErrorMessage, Words, writeErrorMessageLog, writeMessageLog } from './functions_ok';

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

describe('writeMessageLog()', () => {
  test('writes an error message', () => {
    const message = 'Required data empty';
    const isError = true;
    // expect(writeMessageLog(message, isError)).toEqual(undefined);
    expect(isError ? writeErrorMessageLog(message) : writeMessageLog(message)).toEqual(undefined);
  });
  test('writes an normal message', () => {
    const message = 'Application started';
    const isError = false;
    // expect(writeMessageLog(message, isError)).toEqual(undefined);
    expect(isError ? writeErrorMessageLog(message) : writeMessageLog(message)).toEqual(undefined);
  });
});

describe('words()', () => {
  let words: Words;
  beforeEach(() => {
    words = new Words();
  });

  test('throw error on null or undefined', () => {
    expect(() => {
      words.count(null);
    }).toThrow();
  });

  test('counts empty', () => {
    const expectedCounts = {};
    expect(words.count('  ')).toEqual(expectedCounts);
  });

  test('counts one word', () => {
    const expectedCounts = { word: 1 };
    expect(words.count('word')).toEqual(expectedCounts);
  });

  test('counts one of each', () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(words.count('one of each')).toEqual(expectedCounts);
  });

  test('counts multiple occurrences', () => {
    const expectedCounts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1,
    };
    expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
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
    expect(words.count('car : carpet as java : JavaScript!!&@$%^&')).toEqual(expectedCounts);
  });

  test('includes numbers', () => {
    const expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(words.count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  test('normalizes to lower case', () => {
    const expectedCounts = { go: 3 };
    expect(words.count('go Go GO')).toEqual(expectedCounts);
  });

  test('counts properly international characters', () => {
    const expectedCounts = {
      '¡hola!': 1,
      '¿qué': 1,
      'tal?': 1,
      'привет!': 1,
    };
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  test('counts multiline', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\nworld')).toEqual(expectedCounts);
  });

  test('counts tabs', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello\tworld')).toEqual(expectedCounts);
  });

  test('counts multiple spaces as one', () => {
    const expectedCounts = { hello: 1, world: 1 };
    expect(words.count('hello  world')).toEqual(expectedCounts);
  });

  test('does not count leading or trailing whitespace', () => {
    const expectedCounts = { introductory: 1, course: 1 };
    expect(words.count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  test('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = {
      reserved: 1,
      words: 1,
      like: 1,
      tostring: 1,
      'ok?': 1,
    };
    expect(words.count('reserved words like toString ok?')).toEqual(expectedCounts);
  });
});
