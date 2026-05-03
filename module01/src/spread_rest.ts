// spread operator

const friends = ['Rahim', 'Karim', 'Torim'];

const schoolFriends = ['pintu', 'cindu', 'pindu'];

const collegeFriends = ['Mr. Smart', 'Mr Very very Smart'];


friends.push(...schoolFriends);
friends.push(...collegeFriends)

console.log(friends);

const user = {name: "Mezba", phoneNo:"018882838"};

const otherInfo = {hoppy: 'Outing', favouriteColor: 'Black'};

const userInfo = {...user, ...otherInfo};


console.log(userInfo);


//rest operator

const senInvite = (...friends: string[]) =>{
    friends.forEach((friend:string) => {
        console.log(`Send Invitation to ${friend}`)
    })
}

senInvite('Pintu', 'Cintu', 'Kolkol', 'chucul')