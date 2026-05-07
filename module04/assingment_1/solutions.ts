// Problem 1

function filterEvenNumbers(numbers:number[]):number[] {
    const result = numbers.filter((e) => e % 2 ==0)
    return result; 
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2:

function reverseString(text:string): string {
    const result = text.split("").reverse().join("");
    return result;
}

reverseString("TypeScript");

// Problem 3
function checkType(value: string | number) {
    if(typeof value == 'string') {
        return "String";
    }else if(typeof value == 'number') {
        return "Number";
    }
}

checkType("Hello");

// Problem 4

function getProperty<T, K extends keyof T>(value: T, key: K){
    return value[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");

// Problem 5

interface Book {
    title: string;
    author: string; 
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    }

}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

toggleReadStatus(myBook);

// Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);

        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name} Age: ${this.age}, Grade: ${this.grade}`
    }
}


const student = new Student("Alice", 20, "A");

student.getDetails();

// Problem 7
function getIntersection(arr1:number[], arr2:number[]) {
    return arr1.filter(element => {
        return arr2.includes(element);
    })
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);