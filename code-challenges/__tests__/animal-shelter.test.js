'use strict';

const { AnimalShelter, Animal } = require('../401/fifoAnimalShelter/animal-shelter');





const animal1 = new Animal('cat');
const animal2 = new Animal('cat');
const animal3 = new Animal('dog');
const animal4 = new Animal('dog');
const animal5 = new Animal('bad');

describe('Animal Shelter', () => {
  it('can enqueue cat or dog', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(animal1);
    shelter.enqueue(animal3);
    expect(shelter.catsShelter[0].type).toEqual(animal1.type);
    expect(shelter.dogShelter[0].type).toEqual(animal3.type);
  });
  it(`can't enqueue if animal is not cat or dog`, () => {
    const shelter = new AnimalShelter();
    expect(shelter.enqueue(animal5)).toEqual(undefined);
  });
  it(`can't dequeue if pref is not cat or dog`, () => {
    const shelter = new AnimalShelter();
    expect(shelter.dequeue('bad')).toBeNull();
  });
  it(`can dequeue if pref is cat or dog`, () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(animal1);
    shelter.enqueue(animal3);
    shelter.enqueue(animal4);
    shelter.enqueue(animal2);
    const result = shelter.dequeue('cat');
    const result2 = shelter.dequeue('dog');
    expect(result).toEqual(animal1);
    expect(result2).toEqual(animal3);
  });
});
