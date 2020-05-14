// ❌ too much jobs for the same buddy
export class Triangle {
  constructor(public readonly base: number, public readonly height: number) {
    this.validate();
  }
  private validate(): void {
    if (this.base <= 0 || this.height <= 0) {
      throw 'Both measures must be positive.';
    }
  }
  getArea(): number {
    const HALVE = 0.5;
    return HALVE * this.base * this.height;
  }
  save(): void {
    console.log(`Triangle with base ${this.base} and height ${this.height}`);
  }
}
