"use strict";
// Keyof : type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "cng";
const user = {
    id: 222,
    name: "mezba",
    address: {
        city: 'ctg',
    }
};
// const myId = user.id;
const myId = user['id'];
const myName = user['name'];
const address = user['address'];
// console.log({myId, myName, address});
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result01 = getPropertyFromObj(user, 'name');
// console.log(result01);
const product = {
    brand: "Hp",
};
const student = {
    id: 123,
    name: 'AShraf',
    class: '4'
};
const result02 = getPropertyFromObj(product, 'brand');
const result03 = getPropertyFromObj(student, 'class');
console.log(result03);
//# sourceMappingURL=keyof-condtrant.js.map