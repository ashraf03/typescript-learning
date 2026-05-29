type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    }
    gender: 'male' | 'female';
    contactNo: string;
    address: {
        division: string;
        city: string
    }
}


const user1: User = {
    id: 123,
    name: {
        firstName: "Md",
        lastName: "Ashraf",
    },
    gender: 'male',
    contactNo: "018247",
    address: {
        city: "Sylhet",
        division: "SYlhet"
    }
}

const user2: User = {
    id: 123,
    name: {
        firstName: "Md",
        lastName: "Ashraf ud",
    },
    gender: 'female',
    contactNo: "35345",
    address: {
        city: "Sg",
        division: "sd"
    }
}

type IsAdmin = true

const isAdmin:IsAdmin = true

type Name = string;

const myName: Name = "Ashraf Uddin";

type AddFun = (num1: number, num2: number) => number;

const add:AddFun = (num1, num2) => num1 + num2;