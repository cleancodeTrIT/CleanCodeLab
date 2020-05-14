export class Triangle {
  constructor(public readonly base: number, public readonly height: number) {
    this.validate();
  }
  private validate(): void {
    if (this.base <= 0 || this.height <= 0) {
      throw 'Both measures must be positive.';
    }
  }
}

export class Square {
  constructor(public readonly side: number) {
    this.validate();
  }
  private validate(): void {
    if (this.side <= 0) {
      throw 'Side must be positive.';
    }
  }
}

// ❌ a new shape requires create a new method
export class Calculator {
  getTriangleArea(triangle: Triangle): number {
    const HALVE = 0.5;
    return HALVE * triangle.base * triangle.height;
  }
  getSquareArea(square: Square): number {
    return square.side * square.side;
  }
}

// ❌ a new shape requires modify the implementation
export class Repository {
  save(shape: unknown): void {
    if (shape.side === undefined) {
      console.log(`Triangle with base ${shape.base} and height ${shape.height}`);
    } else {
      console.log(`Square with side ${shape.side}`);
    }
  }
}
