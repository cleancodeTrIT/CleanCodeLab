function getTotalForClient(
  clientName: string,
  isVIP: boolean,
  orders: { lines: { units: number; price: number; taxType?: string }[] }[],
  discounts: number[],
  taxes: { type: string; percent: number }[],
  transport: number
) {
  let total = 0;
  orders.forEach(order => {
    let orderTotal: number;
    order.lines.forEach(line => {
      const amount = line.units * line.price;
      if (line.taxType !== null) {
        const tax = taxes.find(tax => tax.type === line.taxType).percent;
        const lineTotal = amount + tax * amount;
        total += lineTotal;
      }
      orderTotal += amount;
    });
    if (isVIP === false && orderTotal < 1000) {
      let transportCost = orderTotal * transport;
      if (transportCost < 10) transportCost = 10;
      total += transportCost;
    }
  });
  if (total > discounts[0]) {
    total *= 0.7;
  } else if (total > discounts[1]) {
    total *= 0.8;
  } else if (total > discounts[2]) total *= 0.9;
  return total;
}
