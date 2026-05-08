// type User = {
//     name: string;
//     age: number;
// } 

// //interface: object type:array, objet, function


// interface IUser {

// }

// type Role = {
//     role: 'admin'|'user'
// }

// type UserWithRole = User & Role;

// interface IUserWithRole extends IUser {
//     role: 'admin' | 'user'; 
// }

// const user1: IUserWithRole = {
//     name: 'Mr.x',
//     age: 100,
//     role: 'admin'
// }

// const user2: IUser = {
//     name: 'Mr.x',
//     age: 100,
// }

// type IsAdmin = boolean;

// const isADmin: IsAdmin = false;


// // function

// type Add = (num1:number, num2:number) => number;

// interface IAdd {
//     (num1:number, num:number) : number
// }
// // const add: Add = (num1, num2) => num1 + num2; 

// const add: IAdd = (num1, num2) => num1 + num2;

// type Friends = string[];

// const friends: string[] = ['A', 'C', 'D'];

// interface IFriends {
//     [index:number] : string
// }


// basic example 
interface User {
    name: string;
    age: number;
}

const user1:User = {
    name: "AShraf",
    age: 34,
};

console.log(user1);


// interface with function
interface Person {
    name: string;

    greet(): string;
}

const person:Person = {
    name: 'Ashraf',

    greet() {
        return `Hello ${this.name}`;
    }
}

// optional properties use ?

interface UserI{
    name:string;
    age?:number;
}


// Readonly Property
interface Car {
    readonly brand: string;
}

interface Animal {
    sound(): void;
}

class Dog implements Animal {
    sound(): void {
        console.log("Bark");
    }
}