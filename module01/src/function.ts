// // Normal function
// // Arror function

// function addNormal(num1: number, num2:number) : number {
//     return num1 + num2;
// }

// const result = addNormal(2, 33);


// console.log(result);

// const addArow = (num1: number, num2:number): number => {
//     return num1 + num2;
// }

// const result1 = addArow(2, 33);


// console.log(result1);

// // object => function => method

// const poorUser = {
//     name: "Ashraf",
//     balance: 0,

//     addBalance(value: number) {
//         const totalBalance = this.balance + value;

//         return totalBalance;
//     }
// }

// poorUser.addBalance(10000);

// const arr: number[] = [1, 3, 4];

// const sqArry = arr.map((elem: number): number  => elem * elem);


function addNormal(num1: number, num2: number) {
    return num1 + num2;
}

const result = addNormal(2, 33);

console.log(result);

const addArow = (num1: number, num2: number) => {
    return num1 + num2;
}

console.log(addArow(23, 5));

// object => function => method

const poorUser = {
    name: "Ashraf",
    balance: 0,
    addBalance(value: number): number {
        return this.balance  + value;
    }
}

console.log(poorUser.addBalance(20000))

// callback function

const arr: number[] = [1, 2, 4, 5, 6];

const sqrArray = arr.map((elem: number): number => elem * elem)