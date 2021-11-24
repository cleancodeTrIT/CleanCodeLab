/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mammal extends Animal {
  abstract giveBirth(name: string): Mammal;
  abstract breastFeed(child: Mammal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(name: string): Oviparous;
}

// ✔️ extend and implement abstract methods
export class Whale extends Mammal {
  giveBirth(name: string): Mammal {
    return new Whale(name);
  }
  breastFeed(child: Whale): void {
    console.log('Feeding my little ', child);
  }
}

// ✔️ extend and implement abstract methods
export class ClownFish extends Oviparous {
  layEggs(name: string): Oviparous {
    return new ClownFish(name);
  }
}

// ❌ I can´t give birth the way you think
// ❌ I can breast feed, but who???
export class PlatypusMammal extends Mammal {
  giveBirth(): Mammal {
    throw new Error('Method not implemented.');
  }
  breastFeed(child: PlatypusMammal): void {
    console.error('I do not get a child to feed');
  }
}

// ❌ Now I can't feed my little one :-(
export class PlatypusOviparous extends Oviparous {
  layEggs(name: string): PlatypusOviparous {
    return new PlatypusOviparous(name);
  }
}
