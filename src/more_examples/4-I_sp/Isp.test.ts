/* eslint-disable max-lines-per-function */
import { Hen, Mouse } from './Isp_ok';

/* eslint-disable max-nested-callbacks */

describe('Caring animals and their offspring', () => {
  test('Given a female mouse I hope her can give birth ', () => {
    const actual = new Mouse('Minnie').giveBirth;
    expect(actual).toBeDefined();
  });
  test('Given a female mouse I hope her can feed her children ', () => {
    const actual = new Mouse('Minnie').breastFeed;
    expect(actual).toBeDefined();
  });
  test('Given a female hen I hope can lay eggs ', () => {
    const actual = new Hen('Camilla').layEggs;
    expect(actual).toBeDefined();
  });
});
