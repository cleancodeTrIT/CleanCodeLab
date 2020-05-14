/* eslint-disable max-params */

// ❌ primitive obsession
export function calculateInterest(): number {
  const principal = 1000;
  const rate = 3.5;
  const years = 1;

  const amount = getSimpleInterest(principal, rate, years);
  return amount;
}
// ❌ multiple parameters
function getSimpleInterest(principal: number, rate: number, years: number): number {
  const PER_CENT = 100;
  const amount = (principal * rate * years) / PER_CENT;
  return amount;
}
