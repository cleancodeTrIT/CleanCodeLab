function checkStringIsValid(password: string): boolean {
  // 2 to 7 lowercase chars followed by 3 or 4 numbers
  // Valid:   kejix173
  //          aoe193
  // Invalid: a92881
  const regex = new RegExp('[a-z]{2,7}[1-9]{3,4}');
  const hasMatch = regex.test(password);
  return hasMatch;
}

console.log(checkStringIsValid('kejix173'));

// TODO: refactor and use a more expressive logic instead of a regular expression

// ***********************
// Other good comments:
// ***********************

// * Public API surface (ideal to auto generate documentation)
// * Highlight the importance of some code
// * Explain the reason for something apparently weird
