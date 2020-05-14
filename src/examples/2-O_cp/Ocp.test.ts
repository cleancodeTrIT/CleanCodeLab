/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
// import { Triangle } from './Ocep_ba';
import { Calculator, Square, Triangle } from './Ocp_ok';

describe('work with triangles', () => {
  test('Given a triangle get its area', () => {
    const input = new Triangle(15, 20);
    const actual = new Calculator().getArea(input);
    const expected = 150;
    expect(actual).toEqual(expected);
  });
});
describe('work with squares', () => {
  test('Given a square get its area', () => {
    const input = new Square(15);
    const actual = new Calculator().getArea(input);
    const expected = 225;
    expect(actual).toEqual(expected);
  });
});
