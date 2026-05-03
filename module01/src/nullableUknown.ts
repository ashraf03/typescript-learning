//nullable types
const getUser = (input: string | null) => {
    if(input) {
        console.log(`From DB: ${input}`)
    } else {
        console.log('From DB: All User')
    }
}

getUser(null);

// unknown

const discountCalculator = (input: unknown) => {
    if(typeof input === 'number') {
        const discountPrice = input * 0.1;
        console.log(discountPrice)
    } else if (typeof input === 'string') {
        const [discountPrice] = input.split(" ")
        console.log(Number(discountPrice) *0.1);
    } else{
        console.log('Worng input')
    }
}

discountCalculator(100);
discountCalculator('100 tk');
discountCalculator(null);

// void 
const throwError = (msg: string):never =>{
    throw new Error(msg)
}