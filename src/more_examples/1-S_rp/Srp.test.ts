/* eslint-disable max-nested-callbacks */
import { Animal, AnimalDB } from './Srp_ok';

describe('Managing animals', () => {
  test('Given an animal get its name', () => {
    const actual = new Animal('Lassie').getAnimalName();
    const expected = 'Lassie';
    expect(actual).toEqual(expected);
  });
  test('Given an animal save it', () => {
    const actual = AnimalDB.saveAnimal(new Animal('Lassie'));
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
