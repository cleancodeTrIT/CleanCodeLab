/* eslint-disable @typescript-eslint/no-use-before-define */
// ✔️
const PI = 3.14;
const HALVE = 0.5;

export function getArea(shape: Shape): number {
  return shape.getArea();
}

abstract class Shape {
  constructor(public readonly name: string) {}
  abstract getArea?(): number;
}

export class Triangle extends Shape {
  constructor(public base: number, public height: number) {
    super('TRIANGLE');
  }
  getArea(): number {
    return HALVE * this.base * this.height;
  }
}

export class Square extends Shape {
  constructor(public height: number) {
    super('SQUARE');
  }
  getArea(): number {
    return this.height * this.height;
  }
}

export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super('RECTANGLE');
  }
  getArea(): number {
    return this.width * this.height;
  }
}

export class Circle extends Shape {
  constructor(public radius: number) {
    super('CIRCLE');
  }
  getArea(): number {
    return PI * this.radius * this.radius;
  }
}
