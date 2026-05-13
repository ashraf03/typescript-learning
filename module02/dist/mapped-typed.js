"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
// map
const arrayOfNum = [1, 2, 4, 6];
const arrayOfString = ['1', '3', '4', '6'];
const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
const user = {
    id: 222
};
/**
 *  T >>> {height: string; width: number}
 *  T['height'] : string
 * T['width'] : string
 */
// "height" / 'width'
const area1 = {
    height: '50',
    width: 40,
};
//# sourceMappingURL=mapped-typed.js.map