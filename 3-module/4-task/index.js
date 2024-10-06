let user1 = {
  balance: "$1,825.65",
  picture: "https://placehold.it/32x32",
  age: 21,
  name: "Golden Branch",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana",
};

let user2 = {
  balance: "$2,425.65",
  picture: "https://placehold.it/32x32",
  age: 16,
  name: "Duncan Randall",
  gender: "male",
  greeting: "Hello, Duncan Randall! You have 7 unread messages.",
  favouriteFruit: "banana",
};

let user3 = {
  balance: "$2,425.65",
  picture: "https://placehold.it/32x32",
  age: 50,
  name: "Duncan Randall2",
  gender: "male",
  greeting: "Hello, Duncan Randall! You have 7 unread messages.",
  favouriteFruit: "banana",
};

let users = [user1, user2, user3];

function showSalary(users, age) {
  let result = users
    .filter((user) => user.age <= age)
    .map((user) => `${user.name}, ${user.balance}`)
    .join("\n");

  return result;
}
console.log(showSalary(users, 40));
