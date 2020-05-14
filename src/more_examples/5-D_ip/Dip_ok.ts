import { LayEggs } from '../4-I_sp/Isp_ok';

// ✔️ depends on abstractions
export class Farm {
  constructor(private eggsProducer: LayEggs) {}
  produceEggs(name: string): LayEggs {
    return this.eggsProducer.layEggs(name);
  }
}
