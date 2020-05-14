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

export class Sphere extends Shape {
  constructor(public readonly radius: number) {
    super('Sphere');
    this.validate();
  }
  private validate(): void {
    if (this.radius <= 0) {
      throw 'Radius must be positive.';
    }
  }
}
// ❌ there is no way to extend this base class for each case
export abstract class Calculator {
  abstract getArea(shape: Shape): number;
  abstract getPerimeter(shape: Shape): number;
  abstract getVolume(shape: Shape): number;
}

export class TriangleCalculator extends Calculator {
  getArea(triangle: Triangle): number {
    const HALVE = 0.5;
    return HALVE * triangle.base * triangle.height;
  }
  getPerimeter(triangle: Triangle): number {
    throw 'Perimeter cannot always be inferred from every triangle.';
  }
  getVolume(triangle: Triangle): number {
    return 0;
  }
}

export class RightTriangleCalculator extends TriangleCalculator {
  getPerimeter(triangle: RightTriangle): number {
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
  getVolume(square: Square): number {
    return 0;
  }
}

export class SphereCalculator {
  getArea(sphere: Sphere): number {
    const PI = 3.14;
    const coefficient = 4;
    return coefficient * PI * sphere.radius * sphere.radius;
  }
  getPerimeter(sphere: Sphere): number {
    throw 'A Sphere does not have perimeter';
  }
  getVolume(sphere: Sphere): number {
    const PI = 3.14;
    const coefficient = 1.33;
    return coefficient * PI * sphere.radius * sphere.radius * sphere.radius;
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

export class SpheresRepository {
  save(sphere: Sphere): void {
    console.log(`Sphere with radius ${sphere.radius}`);
  }
}
