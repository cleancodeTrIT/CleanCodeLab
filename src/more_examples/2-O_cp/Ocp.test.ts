/* eslint-disable max-nested-callbacks */
import { Gorilla, Lion, makeAnimalsSounds } from './Ocp_ok';

describe('Listen to animals', () => {
  test('Given a group of animals get their sounds', () => {
    const talkingAnimals = [new Lion('Simba'), new Gorilla('King Kong')];
    const actual = makeAnimalsSounds(talkingAnimals);
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
