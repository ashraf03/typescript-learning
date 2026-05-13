"use strict";
// Opp - class - object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(`The animal is making sound`)
//     }
// }
// parameter properties
class Animal {
    name;
    species;
    sound;
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`The animal is making sound`);
    }
}
const dog = new Animal('dogesh bhai', 'dog', 'Ghew ghew');
console.log(dog.name);
const cat = new Animal('Cat bhai', 'Cat', 'mewa mewa');
console.log(cat.makeSound());
// function add (num1:number, num2:number) {
// }
// add(2, 3)
//# sourceMappingURL=class.js.map