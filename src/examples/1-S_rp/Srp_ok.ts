// ✔️ holds data and basic logic
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

// ✔️ specialized in calculations
export class Calculator {
  getArea(triangle: Triangle): number {
    const HALVE = 0.5;
    return HALVE * triangle.base * triangle.height;
  }
}

// ✔️ specialized in saving and accessing data
export class Repository {
  save(triangle: Triangle): void {
    console.log(`Triangle with base ${triangle.base} and height ${triangle.height}`);
  }
}
