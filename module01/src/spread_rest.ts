// spread operator

const friends = ["Rahim", "Karim"];
const schoolFriends = ["Pintu", "chintu", "bulbul"];

const collegeFriends = ["Mr. Smart", "Mr very very smart"];

// const friends = ["Rahim", "Karim", ["Pintu", "chintu", "bulbul"]]

friends.push(...schoolFriends);
friends.push(...collegeFriends)
console.log(friends);

const user = {
    name: "Ashraf",
    phoneNo: '01818818222',
}


const oterInfo = {
    hoppy: 'outing',
    favouriteColor: "Black",

}

const userInfo = {...user, ...oterInfo}

console.log(userInfo);


// rest operator
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send invitation ${friend}`))
}

sendInvite("Ashraf", "TAnjil", "Nanan")