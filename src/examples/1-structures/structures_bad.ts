/* eslint-disable max-params */

// ❌ primitive obsession
export function calculateInterest(): number {
  const principal = 1000;

  const rate = 3.5;
  const years = 1;

  const interest = getSimpleInterest(principal, rate, years);
  return interest;
}

// ❌ multiple parameters
function getSimpleInterest(principal: number, rate: number, years: number): number {
  const PER_CENT = 100;
  const interest = (principal * rate * years) / PER_CENT;
  return interest;
}
