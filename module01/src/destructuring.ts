// // array destructuring 
// // onject desreucturing


// const user = {
//     id: 12213,
//     name: {
//         firstName: 'Mezbaul', 
//         middleName: 'Abedin', 
//         lastName: 'Forhan',
//     },
//     gender: 'male', 
//     favouriteColor: 'Black',
// }

// // const myFavouriteColor = user.favouriteColor
// // const myMiddleName = user.name.middleName

// const {favouriteColor: myFavouriteColor, name:{middleName : myMiddleName}} = user;

// console.log(myFavouriteColor, myMiddleName);

// const friends = ['Karim', 'Rahim', 'Mahim'];

// const [, , c] = friends;

// console.log(c);


// object destructuring
// array destructuring

const user = {
    id: 12232,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Forhan",
    },
    gender: "male",
    favouriteColor: "Black",
}

// const mtFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;


const  {favouriteColor, name: {middleName : myMiddleName},} = user;

console.log(myMiddleName);


const friends = ['Karim', 'Sarim', 'Mahim'];

// const myBestFriend = friends[1];

const [, , C] = friends;

console.log(C);