// Dynamic generalize

type GenericArray<T> = Array<T>;



// const friends: string[] = ['Mr.x', 'Mr. Y', 'Mr.Z']

const friends1: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];


// const rollNumbers:number[] = [4, 3, 55];
const rollNumbers:GenericArray<number> = [4, 3, 55];

const isEligibleList: GenericArray<boolean> = [true, false, true];

type User1 = {name: string, age: number};

const userList: GenericArray<User1> = [
   {
        name: "Mr.X",
        age: 22,
   },
   {
        name: "Mr.Y",
        age: 22,
   },
   {
        name: "Mr.Z",
        age: 22,
   },
]

const sqrFunc = (value:number) => {
    return value * value;
}

sqrFunc(33)

type Coordinates<X, Y> = [X, Y]

const coordinates1:Coordinates<number, number> = [20, 30];
const coordinates2:Coordinates<string, string> = ['20', '30'];




