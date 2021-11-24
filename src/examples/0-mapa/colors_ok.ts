// ✔️ Solve with a simple structure like an array or object map
const STATUS_CONFIGURATIONS = [
  {
    id: 0,
    color: 'Black',
    icon: '🎈',
  },
  {
    id: 1,
    color: 'Blue',
    icon: '🎆',
  },
  {
    id: 2,
    color: 'Red',
    icon: '🧨',
  },
];

function getStatusConfiguration(statusId: number) {
  const configuration = STATUS_CONFIGURATIONS.find(s => s.id === statusId);

  const defaultConfiguration = { id: statusId, color: 'White', icon: '' };

  return configuration || defaultConfiguration;
}

/** more examples */

// < 10  unidades 0%
// 10 < 100 10%
// > 100 20 %

function getDiscountIf(units: number) {
  let discount = 0;
  if (units < 10) {
    discount = 0;
  } else if (units < 100) {
    discount = 10;
  } else {
    discount = 100;
  }
  return discount;
}

const RANGE_DISCOUNTS = [
  {
    min: 0,
    max: 10,
    discount: 0,
  },
  {
    min: 10,
    max: 100,
    discount: 10,
  },
  {
    min: 100,
    max: 10000,
    discount: 10,
  },
];

function getDiscountMap(units: number) {
  const rangeDiscount = RANGE_DISCOUNTS.find(x => units < x.max);
  const defaultRange = RANGE_DISCOUNTS[0];
  return rangeDiscount || defaultRange;
}

// function getDiscountSwitch(units: number) {
//   let discount = 0;
//   switch (units) {
//     case :

//       break;

//     default:
//       break;
//   }
// }
