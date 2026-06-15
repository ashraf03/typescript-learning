// Opp - class - object

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name
        // this.species = species
        // this.sound = sound
    }

    makeSound() {
        console.log(`${this.name} is making sound : ${this.sound}`);
    }
}

const dog = new Animal("dogish bhai", "dog", "Ghew Ghew")

const cat = new Animal("cogish bhai", "dog", "mew mew")

console.log(cat.name)
console.log(dog.name)
dog.makeSound()
cat.makeSound()

// function add(num1: number, num2: number) {

// }
// add(2, 3);