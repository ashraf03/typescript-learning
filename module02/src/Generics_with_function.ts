// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number, name: string}) => {
//     return [value];
// }

const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(22);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: "Next Level",
});

// Tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayWithTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArrayWithTupleWithGeneric("AShraf", false);
const res2 = createArrayWithTupleWithGeneric(222, {
    name: "Ashraf"
})


const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next level",
        ...studentInfo,
    }
};

const student1 = {
    id: 123,
    name: 'MEzba',
    hasPen: true,
}

const student2 = {
    id: 213,
    name: "Tanjil Ch",
    hasCar: true,
    isMarried: true
}

const result = addStudentToCourse(student1);

console.log(result);



const Demo = <T> (information: T) => {
    return {
         course: "Next Level Two",
        ...information
    }
}


const stIn = {
    name: "Ashraf Uddin",
    age: 234
}

const result1 = Demo(stIn);

console.log(result1)