type User = {
     id: number,
    name: {
        firstName: string,
        lastName: string,
    }
    gender: 'male | female',
    contactNo: string,
    adress: {
        division: string,
        city: string
    }
}


const user1: User = {
    id: 1233,
    name:{
        firstName: 'Mr.',
        lastName: 'X',
    },
     gender: "male",
    contactNo:'02432',
    addess: {
        division: 'Chattogram',
        city: 'Chattogram'
    }
}

const user2: User = {
    id: 1233,
    name:{
        firstName: 'Mr.',
        lastName: 'Y',
    },
     gender: "female",
    contactNo:'02352',
    addess: {
        division: 'Dhaka',
        city: 'Dhaka'
    }
}

type isAdmin = true
const isAdmin : isAdmin = true;

type Name = string;

const myName: Name = "Me . X";

type AddFunc =(num1: number, num2: number) => number;

const add: AddFunc= (num1, num2) => num1 + num2;