class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours:number) {
        console.log(`${this.name} eto ghonta ${numOfHours} ghumai`);
    }
}

const student1 = new Student(`Mr. fakibazz`, 18, "Bangladesh");

student1.getSleep(15);

class Teacher extends Student {
    designation: string; //extra property

    constructor(name:string, age:number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }

    takeClass(numOfClass: number) {
        console.log(`${this.name} eto ghonta class ${numOfClass} nei`);
    }
}


const teacher1 = new Teacher(
    "Mr. Smart Teacher",
    25, 
    "Bangladesh",
    "senior teacher"
);

teacher1.takeClass(4);

