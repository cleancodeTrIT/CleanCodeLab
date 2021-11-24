// ✔️ holds data and related logic
export class Animal {
  constructor(public name: string) {}

  getAnimalName(): string {
    return this.name.toLowerCase();
  }
}

// ✔️ persistence
export abstract class AnimalDB {
  static selectAnimal(name: string): Animal {
    return new Animal(name);
  }
  static saveAnimal(animal: Animal): void {
    console.log('Saving' + JSON.stringify(animal));
  }
}

class ClaseAlfa {
  c: string;
  d: string;
  e: string;

  constructor(private algoV: IUve) {}

  x() {
    this.c;
    this.d;
    this.e;
  }
  w() {
    this.d;
    this.algoV.v();
    // new ClaseV().v();
    // new ClaseOmega().v();
  }
}

class ClaseAB {
  a: string;
  b: string;
  z() {
    this.a;
    this.b;
  }
  y() {
    this.a;
    this.b;
  }
}

interface IUve {
  v();
}

class ClaseV implements IUve {
  v() {}
}

class ClaseVPrima implements IUve {
  v() {}
}

class ClaseF {
  f: string;
  g: string;
}

class ClaseX {
  c(c, d, e) {
    c;
    d;
    e;
  }
}
