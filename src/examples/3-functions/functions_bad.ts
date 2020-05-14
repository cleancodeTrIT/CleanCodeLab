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
export function writeMessageLog(message: string, isError: boolean): void {
  if (isError) {
    console.error('ERROR:' + message);
  } else {
    console.log(message);
  }
}

export class Words {
  // ❌ long function
  count(input: string): object {
    // ❌ one responsibility per function
    if (input !== null && input !== undefined) {
      const START = 0;
      const occurrences = {};
      if (input.trim().length > START) {
        const splitedArray = input
          .toLowerCase()
          .trim() // ❌ duplicated rule
          .split(/\s+|\n|\t/);
        // ❌ nested blocks
        for (let index = START; index < splitedArray.length; index++) {
          const word = splitedArray[index];
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
}
