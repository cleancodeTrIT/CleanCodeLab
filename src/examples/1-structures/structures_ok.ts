// ✔️ Define types (or interfaces, os structs... or even classes)
type Currency = 'EUR' | 'USD';

type Money = { amount: number; currency: Currency };

type Condition = { principal: Money; rate: number; years: number };

export function calculateInterest(): Money {
  // ✔️ object literal
  const mySavingsConditions: Condition = conditionsFactory(100, 3.5);

  // ✔️ single parameter
  const interest = getSimpleInterest(mySavingsConditions);
  return interest;
}

function moneyFactory(amount: number, currency: Currency = 'EUR') {
  const MIN_AMOUNT = 0;
  if (amount < MIN_AMOUNT) throw new Error(`No negatives allowed`);
  return {
    amount,
    currency,
  };
}

function conditionsFactory(
  amount: number,
  rate: number,
  years: number = 1,
  currency: Currency = 'EUR'
) {
  const MAX_AMOUNT = 10000;
  if (amount > MAX_AMOUNT) throw new Error(`Maximum amount for capital is ${MAX_AMOUNT}`);

  const MIN_RATE = 1;
  const MAX_RATE = 10;
  if (rate < MIN_RATE || rate > MAX_RATE)
    throw new Error(`Rate must be between ${MIN_RATE} and ${MAX_RATE}`);

  const MIN_YEARS = 0;
  const MAX_YEARS = 100;
  if (years < MIN_YEARS || years > MAX_YEARS)
    throw new Error(`Year must be between ${MIN_YEARS} and ${MAX_YEARS}`);

  const conditions: Condition = {
    principal: moneyFactory(amount, currency),
    rate: rate,
    years: years,
  };
  return conditions;
}

function getSimpleInterest(conditions: Condition): Money {
  const PER_CENT = 100;
  const interestAmount =
    (conditions.principal.amount * conditions.rate * conditions.years) / PER_CENT;
  return moneyFactory(interestAmount, conditions.principal.currency);
}
