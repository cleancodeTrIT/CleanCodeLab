/* eslint-disable max-lines-per-function */
import { ClownFish, Platypus, Whale } from './Lsp_ok';

/* eslint-disable max-nested-callbacks */

describe('Caring animals and their offspring', () => {
  test('Given a female whale I hope her to give birth ', () => {
    const aFemale = new Whale('Ms. Dick');
    const actual = aFemale.giveBirth('Moby Dick').name;
    const expected = 'Moby Dick';
    expect(actual).toEqual(expected);
  });
  test('Given a female whale I hope her feed her child ', () => {
    const aFemale = new Whale('Ms. Dick');
    const herChild = aFemale.giveBirth('Moby Dick');
    const actual = aFemale.breastFeed(herChild);
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  test('Given a female clown fish I hope her to lay eggs ', () => {
    const aFemale = new ClownFish('Ms. Reef');
    const actual = aFemale.layEggs('Nemo').name;
    const expected = 'Nemo';
    expect(actual).toEqual(expected);
  });
  test('Given a female platypus I hope her to lay eggs ', () => {
    const aFemale = new Platypus('Ms. Oldie');
    const actual = aFemale.layEggs('Perry').name;
    const expected = 'Perry';
    expect(actual).toEqual(expected);
  });
});
