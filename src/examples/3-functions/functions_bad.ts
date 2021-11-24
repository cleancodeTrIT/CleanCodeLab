/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
export function getErrorMessage(error: object, isTouched: boolean): string {
  // ❌ Avoid complex conditionals
  if (error !== null && isTouched) {
    return JSON.stringify(error);
  } else {
    return '';
  }
}

// ❌ Avoid flags
export function doSomething(): void {
  try {
    writeMessageLog('Done', false);
  } catch (error) {
    writeMessageLog(error.message, true);
  }
}

export function writeMessageLog(message: string, isError: boolean): void {
  if (isError) {
    console.error('ERROR:' + message);
  } else {
    console.log(message);
  }
}

// ❌ long function
export function countWords(input: string): object {
  // ❌ one responsibility per function
  // ❌ no guards
  if (input !== null && input !== undefined) {
    const START = 0;
    const occurrences = {};
    if (input.trim().length > START) {
      const splittedArray = input
        .toLowerCase()
        .trim() // ❌ duplicated rule
        .split(/\s+|\n|\t/);
      // ❌ nested blocks
      for (let index = START; index < splittedArray.length; index++) {
        const word = splittedArray[index];
        // ❌ complex expressions
        occurrences[word] === undefined ? (occurrences[word] = 1) : occurrences[word]++;
      }
    }
    // ❌ early return
    return occurrences;
  } else {
    // ❌ guards
    throw 'We need a string as input';
  }
}
