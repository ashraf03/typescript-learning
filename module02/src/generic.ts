// dynamically generalize: Generic
// const friends: string[] = ["MR. x", "Mr. Y", "Mr. Z"];

type GenericArray<T> = Array<T>

const friends: GenericArray<string> = ["MR. x", "Mr. Y", "Mr. Z"];

const rollNumbers: GenericArray<number> = [4, 7, 88];

const isEligibleList: GenericArray<boolean> = [true, false, true];


const sqrFunc = (value: number) => {
     return value * value;
}

sqrFunc(5) 


type Coordinates<X, Y> = [X, Y];

const coordinates1:Coordinates<number, number> = [1, 3];
const coordinates2:Coordinates<string, string> = ['2', '4'];


type User = {
     name: string; age: number
}


const userList: GenericArray<User> = [
     {
          name: 'Mr. x',
          age: 22,
     },
     {
          name: 'Mr. Y',
          age: 34
     },
]