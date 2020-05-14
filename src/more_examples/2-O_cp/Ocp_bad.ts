import { Animal } from '../1-S_rp/Srp_ok';

class TalkingAnimal extends Animal {
  constructor(name: string, public kind: string) {
    super(name);
  }
}

export function makeAnimalsSound(animals: Array<Animal>): void {
  animals.forEach(makeAnimalSound);
}
// ❌ this way goes down to a switch hell
function makeAnimalSound(animal: TalkingAnimal): void {
  if (animal.kind === 'Lion') console.log('roar');
  if (animal.kind === 'Gorilla') console.log('grunt');
}
