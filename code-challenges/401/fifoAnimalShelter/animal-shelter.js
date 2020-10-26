'use strict';

class Animal {
  constructor(type) {
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.catsShelter = [];
    this.dogShelter = [];
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.catsShelter.push(animal);
      return undefined;
    } else if (animal.type === 'dog') {
      this.dogShelter.push(animal);
      return undefined;
    }
  }
  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }
    if (pref === 'cat' && this.catsShelter.length !==0 ) {
      let animalOut = this.catsShelter[0];
      this.catsShelter = this.catsShelter.slice(1,this.catsShelter.length);
      return animalOut;
    } else if (pref === 'dog' && this.dogShelter.length !==0 ) {
      let animalOut = this.dogShelter[0];
      this.dogShelter = this.dogShelter.slice(1,this.dogShelter.length);
      return animalOut;
    }
  }
}



module.exports = {AnimalShelter , Animal};



