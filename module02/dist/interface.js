"use strict";
// type User = {
//     name: string;
//     age: number;
// } 
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "AShraf",
    age: 34,
};
console.log(user1);
const person = {
    name: 'Ashraf',
    greet() {
        return `Hello ${this.name}`;
    }
};
class Dog {
    sound() {
        console.log("Bark");
    }
}
//# sourceMappingURL=interface.js.map