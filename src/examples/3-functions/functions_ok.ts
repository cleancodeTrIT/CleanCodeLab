// ✅ Avoid complex conditionals
// ✅ Same level of abstraction
export function getErrorMessage(error: object, isTouched: boolean): string {
  if (mustShowError(error, isTouched)) {
    return getErrorString(error);
  } else {
    return getEmptyErrorString();
  }
}
function mustShowError(error: object, isTouched: boolean): boolean {
  return error !== null && isTouched;
}
function getErrorString(error: object): string {
  return JSON.stringify(error);
}
function getEmptyErrorString(): string {
  return '';
}

// ✅ Avoid flags
export function writeMessageLog(message: string): void {
  console.log(message);
}

export function writeErrorMessageLog(message: string): void {
  console.error('ERROR:' + message);
}

// ✅ one responsibility per function
// ✅ one level of abstraction
// ✅ no duplication
// ✅ no nested blocks
// ✅ guards and return early
export class Words {
  count(input: string): object {
    if (this.isInvalid(input)) {
      throw 'We need a string as input';
    }
    const occurrences = {};
    const cleanedInput = this.cleanString(input);
    if (this.isEmpty(cleanedInput)) {
      return occurrences;
    }
    const splitedArray = this.splitString(cleanedInput);
    splitedArray.forEach(word => {
      if (this.isANewOcurrece(word, occurrences)) {
        this.createOcurrence(occurrences, word);
      } else {
        this.accumulateOccurrence(occurrences, word);
      }
    });
    return occurrences;
  }

  private isInvalid(input: string): boolean {
    return input === null || input === undefined;
  }
  private cleanString(input: string): string {
    return input.toLowerCase().trim();
  }
  private isEmpty(input: string): boolean {
    return input.length <= 0;
  }
  private splitString(input: string): string[] {
    const delimiters = /\s+|\n|\t/;
    return input.split(delimiters);
  }
  private isANewOcurrece(word: string, occurrences: object): boolean {
    return occurrences[word] === undefined;
  }
  private createOcurrence(occurrences: {}, word: string): void {
    occurrences[word] = 1;
  }
  private accumulateOccurrence(occurrences: {}, word: string): void {
    occurrences[word]++;
  }
}
