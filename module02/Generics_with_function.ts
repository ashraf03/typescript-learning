// Generic function

// const createArrayWithString = (value:string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number, name: string}) => {
//     return [value];
// };

const createArrayWithGenetic = <T>(value: T) => {
    return [value];
}

const arrString = createArrayWithGenetic("Apple");
const arrNum = createArrayWithGenetic(222);
const arrObj = createArrayWithGenetic({
    id: 231,
    name: 'AShra Uddin'
});

// tuple
const createArrayWithTuple = (param1: string, param2:number) => [param1, param2];

const createArrayTupleWithGenetic = <X, Y>(param1:X, param2: Y) => [param1, param2];

const res1 = createArrayTupleWithGenetic("Mezba", false);

const res2 = createArrayTupleWithGenetic(222, {name:'AShraf'})

// 

const addStudentToCourse = <T>(studentInfo:T) => {
    return{
        course:"Next Level",
        ...studentInfo,
    }
}

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
}

const result = addStudentToCourse(student1);

console.log(result);
