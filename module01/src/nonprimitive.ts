// array, object
// ts - tuple

let bazarList: string[] = ['eggs', 'milk', 'apple']

// bazarList.push(true)

let mixedArr:(string | number)[] = ['eggs', 12, 'milk', 1, "sugar", 2]


let coordinates:[number, number] = [20, 30];

let couple:[string, string] = ['Husband', 'Wife']

let mezbaNameAndRoll:[string, number] = ["Mezba", 79]

let travel:[string, string, number] = ['Dhaka', 'chotogram', 3]


// reference type: object

const user:{
    // organization: "Programing hero"; //value => type : literal type
    readonly organization: "Programing hero"; //access modifier
    firstName:string;
    middleName?:string; //optional type
    lastName:string;
    isMarried: boolean;
} = {
    organization: "Programing hero", 
    firstName: 'AShraf',
    lastName: 'Tanjil',
    isMarried: true,
}



console.log(user);