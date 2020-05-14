/* eslint-disable max-lines-per-function */
import { Animal } from '../1-S_rp/Srp_ok';
import { Hen, LayEggs } from '../4-I_sp/Isp_ok';
import { Farm } from './Dip_ok';

/* eslint-disable max-nested-callbacks */

describe('Having a farm', () => {
  test('Given a farm I want to have hens ', () => {
    const actual = new Farm(new Hen('Camilla')).produceEggs;
    expect(actual).toBeDefined();
  });
  test('Given a farm I also want to have ducks ', () => {
    class Duck extends Animal implements LayEggs {
      layEggs(name: string): Duck {
        return new Duck(name);
      }
    }
    const actual = new Farm(new Duck('Daisy')).produceEggs;
    expect(actual).toBeDefined();
  });
});
