// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1)'

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null < 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);

//Primitive

// 7 types : String , Number , Boolean , null , undefined, 
// Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigint = 344546576893243544546576n;

// Reference(Non primiive)
// Array, Object , Functions

const heros = ["sdf","hffr","jhfrh"];

let myObj = {
    name : "hitesh",
    age : 22,
}


const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// ----------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "amangupta"

let anothername = myYoutubename
anothername = "prity"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "jfiejf2@google.com"

console.log(userOne.email);
console.log(userTwo.email);

