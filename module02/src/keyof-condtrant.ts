// keyOf: type operator

type RichPeoplesVehicle = {
    car: string; // key : value
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

 const myVehicle: MyVehicle2 = "car"

 type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
 }

 const user: User = {
    id: 222, 
    name: "Ashraf",
    address: {
        city: "Sylhet"
    },
 };

//  const userName = user.name
// const myId = user.id; 
const myId = user['id'];
const userName = user['name'];
const address = user['address'];

// console.log({myId}, {userName})

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result1 = getPropertyFromObj(user, 'name');
console.log(result1);

const product = {
    brand: "HP"
}

const student = {
    id: 123,
    class: 'four'
}
const result2 = getPropertyFromObj(product, 'brand');

const result3 = getPropertyFromObj(student, 'class');