import { Animal } from '../1-S_rp/Srp_ok';

export class TalkingAnimal extends Animal {
  constructor(name: string, public kind: string) {
    super(name);
  }

  // ❌ this way goes down to a switch hell
  public makeSound(): void {
    if (this.kind === 'Lion') console.log('roar');
    if (this.kind === 'Gorilla') console.log('grunt');
  }
}
