// ✔️ holds data and basic logic
export class Animal {
  constructor(public name: string) {}
  getAnimalName(): string {
    return this.name;
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
