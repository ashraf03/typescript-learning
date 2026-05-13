"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "AShraf";
const kgToGmConverter = (input) => {
    if (typeof input === "number") {
        return input * 100;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Convert output is: ${Number(value) * 100}`;
    }
};
const result1 = kgToGmConverter(2);
console.log({ result1 });
const result2 = kgToGmConverter("2 kg");
console.log({ result2 });
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=type_assertion.js.map