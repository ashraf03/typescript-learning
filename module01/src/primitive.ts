// JS - TS
// string, number, boolean, undefined, null

// ts: never, unknown, void

let userName:string = "AShraf Uddin";

// userName = 12; 

let userId = 12312;

// userId = "1232"

let isAdmin = false
isAdmin = true;

console.log(isAdmin);

let x = undefined;

x =5;
x = 3;

// string 
let name: string = "Ashraf";
let city: string = "Dhaka";

console.log(name, city);

// boolean

let isStudent: boolean = true;
let isLoggedIn: boolean = false;

// null > Represents Nothing or  Empty value
let data: null = null;

console.log(data);

// undefined > Value is not assigned yet

let value: undefined = undefined;

console.log(value);


// symbol

// Used for creating unique identifiers

let id: symbol = Symbol("id");
let id2: symbol = Symbol("id") 

console.log(id === id2); // false (always unique)

