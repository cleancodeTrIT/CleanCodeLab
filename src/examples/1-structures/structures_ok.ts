// ✔️ in typescript
type MoneyConditionData = { principal: number; rate: number; years: number };

// ✔️ object literal
export function calculateInterest(): number {
  const capitalConditions: MoneyConditionData = { principal: 1000, rate: 3.5, years: 1 };

  const amount = getSimpleInterest(capitalConditions);
  return amount;
}
// ✔️ single parameter
function getSimpleInterest(conditions: MoneyConditionData): number {
  const PER_CENT = 100;
  const amount = (conditions.principal * conditions.rate * conditions.years) / PER_CENT;
  return amount;
}
