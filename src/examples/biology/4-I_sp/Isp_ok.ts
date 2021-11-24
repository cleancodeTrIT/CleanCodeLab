import { Animal } from '../1-S_rp/Srp_ok';

// ✔️ define behaviors

export interface LayEggs {
  layEggs(name: string): LayEggs;
}

export interface GiveBirth {
  giveBirth(name: string): GiveBirth;
}

export interface BreastFeed {
  breastFeed(child: Animal): void;
}

// ✔️ implement behaviors

export class Mouse extends Animal implements GiveBirth, BreastFeed {
  giveBirth(name: string): Mouse {
    return new Mouse(name);
  }
  breastFeed(child: Mouse): void {
    console.log('Feeding my little baby', child);
  }
}

export class Hen extends Animal implements LayEggs {
  layEggs(name: string): Hen {
    return new Hen(name);
  }
}

// ✔️ Of course, even the platypus is now happy

export class Platypus extends Animal implements LayEggs, BreastFeed {
  layEggs(name: string): Hen {
    return new Platypus(name);
  }
  breastFeed(child: Platypus): void {
    console.log('Feeding my little baby', child);
  }
}
