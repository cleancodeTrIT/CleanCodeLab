import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mammal extends Animal {
  abstract giveBirth(name: string): Mammal;
  abstract breastFeed(child: Mammal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(name: string): Oviparous;
}

export abstract class Monotrema extends Animal {
  abstract layEggs(name: string): Monotrema;
  abstract breastFeed(child: Monotrema): void;
}

// ✔️ extend and implement abstract methods
export class Whale extends Mammal {
  giveBirth(name: string): Mammal {
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

export class Platypus extends Monotrema {
  layEggs(name: string): Platypus {
    return new Platypus(name);
  }
  breastFeed(child: Platypus): void {
    console.log('Feeding my little baby', child);
  }
}

// There are other implementations, but involve other principles...
