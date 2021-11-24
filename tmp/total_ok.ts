// ✅ minimal nesting levels

// ✅ one operator per line;

// ✅ simple conditionals;

function getTotalForClient(
  isVIP: boolean,
  orders: { lines: { units: number; price: number; taxType: string }[] }[],
  discounts: number[],
  taxes: { type: string; percent: number }[],
  transport: number
) {
  let total = 0;
  orders.forEach(order => {
    const orderTotal = getOrderTotal(order, isVIP, taxes, transport);
    total += orderTotal;
  });
  const totalDiscountFactor = getDiscountFactorForTotalAmount(total, discounts);
  total *= totalDiscountFactor;
  return total;
}

function getOrderTotal(
  order: { lines: { units: number; price: number; taxType: string }[] },
  isVIP: boolean,
  taxes: { type: string; percent: number }[],
  transport: number
) {
  let { orderLinesBaseAmount, orderLinesTotal } = getOrderLinesAmounts(order, taxes);
  const transportCost = getOrderTransportCosts(isVIP, orderLinesBaseAmount, transport);
  return orderLinesTotal + transportCost;
}

function getOrderLinesAmounts(
  order: { lines: { units: number; price: number; taxType: string }[] },
  taxes: { type: string; percent: number }[]
) {
  let orderLinesBaseAmount: number;
  let orderLinesTotal: number;
  order.lines.forEach(line => {
    const taxFactor = getTaxPercentForLine(line, taxes);
    const lineBaseAmount = getLineBaseAmount(line);
    const lineTax = taxFactor * lineBaseAmount;
    const lineTotal = lineBaseAmount + lineTax;
    orderLinesBaseAmount += lineBaseAmount;
    orderLinesTotal += lineTotal;
  });
  return { orderLinesBaseAmount, orderLinesTotal };
}

function getLineBaseAmount(line: { units: number; price: number; taxType: string }) {
  return line.units * line.price;
}

function getTaxPercentForLine(
  line: { units: number; price: number; taxType: string },
  taxEntries: { type: string; percent: number }[]
) {
  const taxEntry = taxEntries.find(taxEntry => taxEntry.type === line.taxType);
  return taxEntry.percent;
}

function getOrderTransportCosts(isVIP: boolean, orderBaseAmount: number, transportFactor: number) {
  let transportCost = 0;
  if (!isFreeTransport(isVIP, orderBaseAmount)) {
    const calculatedTransportCost = orderBaseAmount * transportFactor;
    transportCost = getMinimalTransportCost(calculatedTransportCost);
  }
  return transportCost;
}

function isFreeTransport(isVIP: boolean, orderBaseAmount: number) {
  const MINIMAL_BASE_FOR_FREE_TRANSPORT = 1000;
  const isABigPurchase = orderBaseAmount >= MINIMAL_BASE_FOR_FREE_TRANSPORT;
  return isVIP || isABigPurchase;
}

function getMinimalTransportCost(calculatedTransportCost: number) {
  const MINIMAL_TRANSPORT_COST = 10;
  return Math.max(calculatedTransportCost, MINIMAL_TRANSPORT_COST);
}

function getDiscountFactorForTotalAmount(total: number, discounts: number[]) {
  if (total > discounts[0]) {
    return 0.7;
  }
  if (total > discounts[1]) {
    return 0.8;
  }
  if (total > discounts[2]) {
    return 0.9;
  }
  return 1;
}
