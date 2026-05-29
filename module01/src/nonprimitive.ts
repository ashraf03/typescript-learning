// array, object
// ts - tuple

let bazarList: string[] = ["eggs", "Milk", "Sugar"];


// bazarList.push(true);

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push(12);

let coordinate: [number, number] = [12, 33] 

let couple: [string, string] = ["Husband", "wife"];

console.log(coordinate)

// refernece type: object

// const user: {
//     organization: "Study Shop", //value => type : literal types
//     firstName: string;
//     middleName?: string; //Optional type
//     lastName: string;
//     isMarried: boolean;
// } = {
//     organization : "Study Shop",
//     firstName: "AShraf",
//     middleName: "Something",
//     lastName: 'Taniil',
//     isMarried : true,
// }

// user.organization = "Demo";

// console.log(user)

const user: {
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; //Optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization : "Study Shop",
    firstName: "AShraf",
    middleName: "Something",
    lastName: 'Taniil',
    isMarried : true,
}

// user.organization = "Demo";

