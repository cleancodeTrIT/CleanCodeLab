// ❌ two different kind of jobs for the same buddy

export class Animal {
  constructor(public name: string) {}

  getAnimalName(): string {
    return this.name.toLowerCase();
  }

  saveAnimal(animal: Animal): void {
    console.log('Saving' + JSON.stringify(animal));
  }
}

class Clase {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;

  z() {
    this.a;
    this.b;
  }
  y() {
    this.a;
    this.b;
  }
  x() {
    this.c;
  }
  w() {
    this.d;
    this.v();
  }
  v() {}
}
