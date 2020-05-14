/* eslint-disable @typescript-eslint/no-explicit-any */

// ✔️ common ancestor for shapes
class Shape {
  constructor(public readonly kind: string) {}
}
export class Triangle extends Shape {
  constructor(public readonly base: number, public readonly height: number) {
    super('TRIANGLE');
    this.validate();
  }
  private validate(): void {
    if (this.base <= 0 || this.height <= 0) {
      throw 'Both measures must be positive.';
    }
  }
}

export class Square extends Shape {
  constructor(public readonly side: number) {
    super('SQUARE');
    this.validate();
  }
  private validate(): void {
    if (this.side <= 0) {
      throw 'Side must be positive.';
    }
  }
}

// ✔️ using a data object to get the function
export class Calculator {
  getArea(shape: Shape): number {
    const calulator = areaCalculator[shape.kind];
    return calulator(shape);
  }
}

const HALVE = 0.5;

// ✔️ a data object could be loaded or modified at run time
export const areaCalculator = {
  TRIANGLE: (shape: any): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: any): number => shape.side * shape.side,
};

// ✔️ an specialized object
export class TrianglesRepository {
  save(triangle: Triangle): void {
    console.log(`Triangle with base ${triangle.base} and height ${triangle.height}`);
  }
}

// ✔️  a new specialized object without touching the above
export class SquaresRepository {
  save(square: Square): void {
    console.log(`Square with side ${square.side}`);
  }
}
