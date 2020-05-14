/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
//import { Triangle } from './Srp_bad';
import { Calculator, Triangle } from './Srp_ok';

describe('work with triangles', () => {
  test('Given a triangle get its area', () => {
    const input = new Triangle(15, 20);
    const actual = new Calculator().getArea(input);
    const expected = 150;
    expect(actual).toEqual(expected);
  });
});
