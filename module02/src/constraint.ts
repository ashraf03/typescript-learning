type Student = {id: number, name: string, dateOfBrith: string, class: string};

const addStudentToCourse1 = <T extends Student>(studentInfo:T) => {
    return{
        course:"Next Level",
        ...studentInfo,
    }
}

const student01 = {
    id: 123, 
    name: "Mezba",
    hasPen: true,
};

const student02 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
}

const student03 = {
    hasWatch: true,
    id: 234,
    name: 'AShraf Uddin',
    dateOfBrith: '34',
    class: 'One'
}


const result1 = addStudentToCourse1(student03);

console.log(result1);