import { Animal } from '../1-S_rp/Srp_ok';

export interface AnimalActivities {
  giveBirth(name: string): Animal;
  breastFeed(child: Animal): void;
  layEggs(name: string): Animal;
}

// ❌ what about layEggs???
export class Mouse extends Animal implements AnimalActivities {
  giveBirth(name: string): Animal {
    return new Mouse(name);
  }
  breastFeed(child: Mouse): void {
    console.log('Feeding my little baby', child);
  }
}

// ❌ what about giveBirth???
// ❌ breas feeding? seriously???
export class Hen extends Animal implements AnimalActivities {
  layEggs(name: string): Hen {
    return new Hen(name);
  }
}
