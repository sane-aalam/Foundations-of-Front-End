// Example-1 object destructing

const user1 = {
  userToken: "191919shs01",
  userAccessToken: "11jdj1910",
  userLogInToken: "10101081",
  userLogOutToken: "10101j101",
};

const user2 = {
  userToken: "191919shs01",
  userAccessToken: "11jdj1910",
  userLogInToken: "10101081",
  userLogOutToken: "10101j101",
};

const collectionUser = {
  ...user1,
  ...user2,
};

console.log(collectionUser);

// Example-2 Array Destructing

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i <= 50; i++) {
  evenNumbers.push(i * 2);
  oddNumbers.push(i * 2 + 1);
}

console.log(evenNumbers);
console.log(oddNumbers);

let combine = [...oddNumbers, ...evenNumbers];
console.log(combine);

// Example-3 mostly used in REACT (useState concpet)

const [counter, updateCounter] = usestate();
// counter - current value
// updateCounter - updatedata value

// Example-4 simple understanding

const grid = ["Fruits", "FootBall", "Cricket"];
const [data1, data2, data3] = grid;

console.log(data1);
console.log(data2);
console.log(data3);
