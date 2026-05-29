type User = {
    name: string;
    age: number;
}
// interface: object type: array, object, fuction
interface IUser{
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: "Mr.X",
    age: 100,
    role: 'admin',
}


const user2: IUser = {
    name: 'asd',
    age: 102
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = true