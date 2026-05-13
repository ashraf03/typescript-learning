// Keyof : type operator

type RichPeoplesVehicle = {
    car: string; //ket : value
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "cng";

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}

const user: User = {
    id:222,
    name: "mezba",
    address: {
        city: 'ctg',
    }
}

// const myId = user.id;
const myId = user['id'];
const myName = user['name'];
const address = user['address'];

// console.log({myId, myName, address});

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result01 = getPropertyFromObj(user, 'name');

// console.log(result01);


const product = {
    brand: "Hp",
}

const student = {
    id: 123,
    name: 'AShraf',
    class: '4'
}

const result02 = getPropertyFromObj(product, 'brand');

const result03 = getPropertyFromObj(student, 'class');

console.log(result03);


