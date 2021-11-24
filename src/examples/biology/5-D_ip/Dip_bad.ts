import { Hen } from '../4-I_sp/Isp_ok';

// ❌ only works with hens
export class Farm {
  private hen = new Hen('Camilla');

  produceEggs(): Hen {
    return this.hen.layEggs('Ginger');
  }
}
