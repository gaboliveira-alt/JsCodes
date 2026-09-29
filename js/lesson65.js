class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }

  makeNoise() {
    console.log(`Este ${this.animalName} faz esse barulho aqui`);
  }
}

class Dog extends Animal {
    makeNoise(soundAnimal) {
        console.log(soundAnimal);
    }
}

class Cat extends Animal {
    makeNoise(soundAnimal) {
        console.log(soundAnimal);
    }
}

const dogExample = new Dog("Belu");
dogExample.makeNoise("auauau");

const catExample = new Cat("Mel");
catExample.makeNoise("miaumiau");