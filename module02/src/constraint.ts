// constraint : strict rules deya

type Student = {id: number, name: string};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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

const student3 = {
    id: 232,
    name: "ASghraf idd",
    hasWatch: true,
}

const result = addStudentToCourse(student3);
     