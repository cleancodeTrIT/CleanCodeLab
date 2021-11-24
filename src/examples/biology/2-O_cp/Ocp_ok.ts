import { Animal } from '../1-S_rp/Srp_ok';

// ✔️ closed for modification
abstract class AnimalSoundMaker extends Animal {
  abstract makeSound(): string;
}

// ✔️ Open for extension
export class Lion extends AnimalSoundMaker {
  makeSound(): string {
    return 'roar';
  }
}
export class Gorilla extends AnimalSoundMaker {
  makeSound(): string {
    return 'grunt';
  }
}

export function makeAnimalsSounds(animals: Array<AnimalSoundMaker>): void {
  animals.forEach(animal => animal.makeSound());
}
