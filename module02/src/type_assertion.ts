let anything: any;

anything = "AShraf";

const kgToGmConverter = (input: string | number) => {
    if(typeof input === "number") {
        return input * 100;
    } else if(typeof input === 'string') {
        const [value] = input.split(" ");
        return `Convert output is: ${Number(value) * 100}`
    }
}


const result1 =  kgToGmConverter(2) as number;
console.log({result1})
const result2 = kgToGmConverter("2 kg") as string;
console.log({result2})


type CustomError = {
    message: string;
}

try{

} catch(err) {
    console.log((err as CustomError).message);
}