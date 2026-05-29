// spread operator

const friends = ["Rahim", "Karim"];
const schoolFriends = ["Pintu", "chintu", "bulbul"];

const friends = ["Rahim", "Karim", ["Pintu", "chintu", "bulbul"]]

friends.push(schoolFriends);

console.log(friends);