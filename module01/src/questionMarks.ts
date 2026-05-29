// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null or undefiend
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
    // if(age > 21) {
    //     console.log("You are eligible");
    // } else {
    //     console.log("Your are not eligible");
    // }

    const result = age >= 21 ? 'You are eligible' : 'Your are not eligible';

    console.log(result);
}

biyerJonnoEligible(23)

const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light Theme';

console.log(selectedTheme)

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNulish = isAuthenticated ?? "You are guest !";

console.log({resultWithTernary}, {resultWithNulish})

// optional chaining

const user:{
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: "Dhaka",
        town: "Chuarughat",
        // postalCode: '2323',
    }
}

const postalcode = user?.address.postalCode;

console.log(postalcode);

