// mapped types

// map

const arrayOfNum: number[] = [1, 2, 4, 6];

const arrayOfString: string[] = ['1', '3', '4', '6'];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

const user = {
    id: 222
}

type AreaOfNum = {
    height: number;
    width: number;
};

type height = AreaOfNum['height'];

// type AreaOfString = {
//     height: string;
//     width: string;
// };

// type AreaOfString = {
//     [key in keyof AreaOfNum] : string;
// }

type Area<T> = {
    [key in keyof T]: T[key];

    // key >> height >> string
    //key >> width >> number
}
/**
 *  T >>> {height: string; width: number}
 *  T['height'] : string
 * T['width'] : string
 */
// "height" / 'width'
const area1:Area<{height: string; width: number}> = {
    height: '50',
    width: 40,
}