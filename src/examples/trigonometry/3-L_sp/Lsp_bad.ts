/* eslint-disable @typescript-eslint/no-explicit-any */
class Shape {
  constructor(public readonly kind: string) {}
}
export class Triangle extends Shape {
  constructor(public readonly base: number, public readonly height: number) {
    super('Triangle');
    this.validate();
  }
  private validate(): void {
    if (this.base <= 0 || this.height <= 0) {
      throw 'Both measures must be positive.';
    }
  }
}
// ❌ a subtype with very particular characteristics
export class RightTriangle extends Triangle {
  constructor(public readonly base: number, public readonly height: number) {
    super(base, height);
  }
}

export class Square extends Shape {
  constructor(public readonly side: number) {
    super('Square');
    this.validate();
  }
  private validate(): void {
    if (this.side <= 0) {
      throw 'Side must be positive.';
    }
  }
}

// ❌ inheritance may hide problems
export abstract class Calculator {
  abstract getArea(shape: Shape): number;
  abstract getPerimeter(shape: Shape): number;
}
// ❌ What happens with a non right triangle?
export class TriangleCalculator extends Calculator {
  getArea(triangle: Triangle): number {
    const HALVE = 0.5;
    return HALVE * triangle.base * triangle.height;
  }
  getPerimeter(triangle: Triangle): number {
    const hypotenuse = Math.sqrt(triangle.base * triangle.base + triangle.height * triangle.height);
    return triangle.base + triangle.height + hypotenuse;
  }
}

export class SquareCalculator extends Calculator {
  getArea(square: Square): number {
    return square.side * square.side;
  }
  getPerimeter(square: Square): number {
    const sides = 4;
    return sides * square.side;
  }
}

export class TrianglesRepository {
  save(triangle: Triangle): void {
    console.log(`Triangle with base ${triangle.base} and height ${triangle.height}`);
  }
}

export class SquaresRepository {
  save(square: Square): void {
    console.log(`Square with side ${square.side}`);
  }
}
