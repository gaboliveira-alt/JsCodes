class Animal {
    constructor(animalName, soundAnimal) {
        this.animalName = animalName;
        this.soundAnimal = soundAnimal;
    }

    makeNoise() {
        console.log(`Este ${this.animalName} faz esse barulho ${this.soundAnimal}`);
    }
}


class Dog extends Animal {}

class Cat extends Animal {}


const dogExample = new Dog("Belu", "auauau");
dogExample.makeNoise();

const catExample = new Cat("Mel", "miau");
catExample.makeNoise();