/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
// ✔️ ✔️
import { Circle, getArea, Rectangle, Square, Triangle } from './areas_solid';

describe('Calculate Area', () => {
  test('Triangle', () => {
    const shape = new Triangle(10, 8);
    expect(getArea(shape)).toEqual(40);
  });
  test('Square', () => {
    const shape = new Square(8);
    expect(getArea(shape)).toEqual(64);
  });
  test('Rectangle', () => {
    const shape = new Rectangle(10, 8);
    expect(getArea(shape)).toEqual(80);
  });
  test('Circle', () => {
    const shape = new Circle(10);
    expect(getArea(shape)).toEqual(314);
  });
  //   test('Sphere', () => {
  //     const shape = { name: 'SPHERE', radius: 10 };
  //     expect(() => {
  //       area(shape);
  //     }).toThrow();
  //   });
});
