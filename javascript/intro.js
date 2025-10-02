let name = "max"; //string
let age = 23; //number
let isDeveloper = true; //boolean
let skills = ["html", "css", "js"]; // array
let person = {name: "max", age: 22, isDeveloper: true, skills: ["html", "css", "js"]}; // object

console.log(name, age, isDeveloper, skills, person);


//operator
 let x = 10;
 let y = 20;
 let z = x + y;
console.log("addition:", x+ y);
console.log("Division:", x/y);
console.log("Subtraction:", x-y);
console.log("Multiplication:", x*y);
console.log("Modulus:", x%y);
console.log("Exponentiation:", x**y);

// control Flow
if (age >= 18) {
    console.log("You are old enough to vote");
} else {
    console.log("You are not old enough to vote");
}

// loops

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// function
function greet(name) {
    console.log("Hello " + name);
}
greet("Max");