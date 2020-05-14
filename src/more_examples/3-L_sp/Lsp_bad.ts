/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mamal extends Animal {
  abstract giveBirth(name: string): Mamal;
  abstract breastFeed(child: Mamal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(name: string): Oviparous;
}

// ✔️ extend and implement abstract methods
export class Whale extends Mamal {
  giveBirth(name: string): Mamal {
    return new Whale(name);
  }
  breastFeed(child: Whale): void {
    console.log('Feeding my little baby', child);
  }
}

// ✔️ extend and implement abstract methods
export class ClownFish extends Oviparous {
  layEggs(name: string): Oviparous {
    return new ClownFish(name);
  }
}

// ❌ what about giveBirth???
// ❌ how can I feed may little child???
export class PlatypusMamal extends Mamal {
  layEggs(): PlatypusMamal {
    return new PlatypusMamal('Perry');
  }
  giveBirth(): Mamal {
    throw new Error('Method not implemented.');
  }
  breastFeed(child: PlatypusMamal): void {
    console.error('I can not get a platypus to feed');
  }
}

// ❌ I still can't feed my little one :-(
export class PlatypusOviparous extends Oviparous {
  layEggs(name: string): PlatypusOviparous {
    return new PlatypusOviparous(name);
  }
  breastFeed(child: PlatypusOviparous): void {
    console.error('I can not get a platypus to feed');
  }
}
