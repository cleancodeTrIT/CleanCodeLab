printWithDiscount({ price: 100 });

// ✅ Same level of abstraction
export function printWithDiscount(product: { price: number }) {
  const price = product.price;
  const finalPrice = calculateFinalPrice(price);
  printPrice(finalPrice);
}

// low level functions

function calculateFinalPrice(price: number) {
  const discount = 0.9;
  return price * discount;
}

function printPrice(price: number) {
  console.log('The price is ' + price);
}
