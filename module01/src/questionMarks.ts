// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const userAge = 21;

const biyerJonnoEligible = (age: number) => {
    // if(userAge >= 21) {
    //     console.log('You are eligible')
    // } else {
    //     console.log('You are not eligible')
    // }

    const result = age >= 21 ? "You are eligible" : "You are not eligible !";

    console.log(result);
};

biyerJonnoEligible(20)

// ?? : nullish coalescing operator : null / undefiend

const userTheme = null;

const selectedTheme = userTheme ?? 'Light theme'

console.log(selectedTheme);


const isAuthenticated = ""

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest! ";

const resultWithNulish = isAuthenticated ?? 'You are guest! ';

console.log({resultWithTernary}, {resultWithNulish})

// OPtional chaining

const user : {
    address:{
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address:{
        city: "Dhaka",
        town: "Bannani",
    },
};

const postalCode = user?.address?.postalCode;

console.log(postalCode)



