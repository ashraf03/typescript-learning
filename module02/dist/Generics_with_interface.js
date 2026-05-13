"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const poorDeveloper = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: 'lenobo',
        model: 'A21',
        releasedYear: '2014'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }
};
const richDeveloper = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: 'Hp',
        model: 'q1',
        releasedYear: '2020'
    },
    smartWatch: {
        heartRate: '400',
        callSupport: true,
        calculator: true,
        AiFeature: true,
    },
    bike: null
};
const add1 = (num1, num2 = 0) => num1 + num2;
add1(2, 5);
const useName = {
    value: "AShraf" //T = string
};
const userAge = {
    value: 22 //T = number
};
const response1 = {
    data: "Login successful",
    success: true
};
// Using with object
const response2 = {
    data: {
        name: "Ashraf"
    },
    success: true
};
//# sourceMappingURL=Generics_with_interface.js.map