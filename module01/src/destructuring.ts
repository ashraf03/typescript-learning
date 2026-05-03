// array destructuring 
// onject desreucturing


const user = {
    id: 12213,
    name: {
        firstName: 'Mezbaul', 
        middleName: 'Abedin', 
        lastName: 'Forhan',
    },
    gender: 'male', 
    favouriteColor: 'Black',
}

// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

const {favouriteColor: myFavouriteColor, name:{middleName : myMiddleName}} = user;

console.log(myFavouriteColor, myMiddleName);

const friends = ['Karim', 'Rahim', 'Mahim'];

const [, , c] = friends;

console.log(c);