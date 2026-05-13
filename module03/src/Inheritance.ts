class Parent {
    name: string; //common
    age: number;  //common
    address: string;

    constructor(name: string, age:number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours:number) {
        console.log(`${this.name} Eni  ${numberOfHours} ghonta gomai`)
    }
}

class Student extends Parent{
    rollNo: number;

    constructor(name: string, age: number, address:string, rollNo:number) {
        super(name, age, address);
        this.rollNo = rollNo;
    }
}

const student1 = new Student('Mr. fakibaaz', 18, 'Bangladesh', 5464);

console.log(student1)
console.log(student1.getSleep(15))

class Teacher extends Parent{
    designation: string; //extra property
    constructor(name: string, age:number, address: string, designation:string) {
        super(name, age, address);
        this.designation = designation;
    }

    //own method
    takeClass(numberOfClass:number) {
        console.log(`${this.name} ${numberOfClass} ghonta class nai`)
    }

}


const teacher1 = new Teacher(
    "Mr. Smart Teacher",
    25,
    "BAngladesh",
    "Senior teacher"
)

teacher1.takeClass(4)

teacher1.address