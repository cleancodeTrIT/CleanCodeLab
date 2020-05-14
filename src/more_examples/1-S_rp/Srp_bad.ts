// ❌ two jobs for the same buddy
export class Animal {
  constructor(public name: string) {}
  getAnimalName(): string {
    return 'Lassie';
  }
  saveAnimal(animal: Animal): void {
    console.log('Saving' + JSON.stringify(animal));
  }
}
