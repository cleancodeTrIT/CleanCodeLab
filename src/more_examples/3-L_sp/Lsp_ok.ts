import { Animal } from '../1-S_rp/Srp_ok';

export abstract class Mamal extends Animal {
  abstract giveBirth(name: string): Mamal;
  abstract breastFeed(child: Mamal): void;
}

export abstract class Oviparous extends Animal {
  abstract layEggs(name: string): Oviparous;
}

export abstract class Monotrema extends Animal {
  abstract layEggs(name: string): Monotrema;
  abstract breastFeed(child: Monotrema): void;
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

export class Platypus extends Monotrema {
  layEggs(name: string): Platypus {
    return new Platypus(name);
  }
  breastFeed(child: Platypus): void {
    console.log('Feeding my little baby', child);
  }
}
