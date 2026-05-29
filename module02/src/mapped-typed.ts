// mapped types

// map


const arrayOfNum: number[] = [1, 2, 4];
const arrayOfString: string[] = ['1', '4', '6'];


const arrayOfStringUsingMap: string[] = 
arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap)

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"];

type AreaOfNumber = {
    height: string;
    width: string;
}

type AreaOfString = {
    [key in "height"  | "width"]: string;
}

type AreaOfBool = {
    [key in keyof AreaOfNum]: boolean;
}

type Area<T> = {
    [key in keyof T]: T[key];
    // key >>  height >> string
    // key >> width >> number
}
/*
T >>> {height: string; width:number}


 "height" | "width"
T['height']: string 
T['width']: number 


{height: string; width:number} ['height']: number
*/
const area1: Area<{height: string; width:number}> =  {
    height: '44',
    width: 33,
}