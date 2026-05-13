"use strict";
// Generic function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value:string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObj = (value: {id: number, name: string}) => {
//     return [value];
// };
const createArrayWithGenetic = (value) => {
    return [value];
};
const arrString = createArrayWithGenetic("Apple");
const arrNum = createArrayWithGenetic(222);
const arrObj = createArrayWithGenetic({
    id: 231,
    name: 'AShra Uddin'
});
// tuple
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGenetic = (param1, param2) => [param1, param2];
const res1 = createArrayTupleWithGenetic("Mezba", false);
const res2 = createArrayTupleWithGenetic(222, { name: 'AShraf' });
// 
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};
const student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
};
const result = addStudentToCourse(student1);
console.log(result);
// without generic
// function getString(value: string):string{
//     return value;
// }
// function getNumber(value:number):number {
//     return value;
// }
// // 
// function getValue<T>(value:T): T{
//     return value;
// }
// getValue<number>(100);
// getValue<string>("Ashraf");
// // Generic Function with array
// function getFirst<T>(arr:T[]): T {
//     return arr[0];
// }
// getFirst<number>([1, 2, 4]);
// getFirst<string>(["a", "b"]);
//# sourceMappingURL=Generics_with_function.js.map