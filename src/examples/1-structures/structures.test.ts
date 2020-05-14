/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
// ❌
// import { calculateInterest } from './structures_bad';
// ✔️
// import { calculateInterest } from './structures_ok';
// ✔️✔️
import { calculateInterest } from './structures_better';

describe('Simple interest calculator', () => {
  test('Get the interest', () => {
    expect(calculateInterest()).toEqual(35);
  });
});
