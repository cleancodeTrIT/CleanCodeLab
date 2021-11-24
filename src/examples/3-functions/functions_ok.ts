// ✅ Avoid complex conditionals
// ✅ Same level of abstraction
export function getErrorMessage(error: object, isTouched: boolean): string {
  if (mustShowError(error, isTouched)) {
    return getErrorString(error);
  } else {
    return getEmptyErrorString();
  }
}
// ✅ The name of the function is clear, is live documentation
function mustShowError(error: object, isTouched: boolean): boolean {
  // ✅ One line per operand
  const hasError = error !== null;
  return hasError && isTouched;
}
function getErrorString(error: object): string {
  return JSON.stringify(error);
}
function getEmptyErrorString(): string {
  return '';
}

// ✅ Avoid flags
export function doSomething(): void {
  try {
    writeInformationLog('Done');
  } catch (error) {
    writeErrorLog(error.message);
  }
}
export function writeInformationLog(message: string): void {
  console.log(message);
}
export function writeErrorLog(message: string): void {
  console.error('ERROR:' + message);
}

// ✅ one responsibility per function
// ✅ one level of abstraction
// ✅ no duplication
// ✅ no nested blocks
// ✅ guards and return early
// ✅ functional class name
export function countWords(input: string): object {
  if (isInvalid(input)) {
    throw 'We need a string as input'; // ✅ return early error guards
  }
  const occurrences = {};
  const cleanedInput = cleanString(input); // ✅ input inmutable
  if (isEmpty(cleanedInput)) {
    return occurrences; // ✅ return early trivial results
  }
  const splittedArray = splitString(cleanedInput);
  // ✅ use expressions with name for complex logic
  splittedArray.forEach(function classifyWord(word) {
    if (isANewOccurrence(word, occurrences)) {
      createOccurrence(occurrences, word);
    } else {
      accumulateOccurrence(occurrences, word);
    }
  });
  return occurrences;
}

function isInvalid(input: string): boolean {
  return input === null || input === undefined;
}
function cleanString(input: string): string {
  // ✅ pure function does not change the input
  return input.toLowerCase().trim();
}
function isEmpty(input: string): boolean {
  return input.length <= 0;
}
function splitString(input: string): string[] {
  const delimiters = /\s+|\n|\t/;
  return input.split(delimiters);
}

function isANewOccurrence(word: string, occurrences: object): boolean {
  return occurrences[word] === undefined;
}
function createOccurrence(occurrences: {}, word: string): void {
  occurrences[word] = 1;
}
function accumulateOccurrence(occurrences: {}, word: string): void {
  occurrences[word]++;
}
