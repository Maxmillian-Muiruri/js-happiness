// dataStructures.js

// String
let str = "Hello World";
console.log(str.toUpperCase(), str.includes("World"));

// Array
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers.map(n => n * 2));

// Object
let car = { brand: "Toyota", model: "Corolla" };
console.log(car.brand);

// Date
let today = new Date();
console.log(today.toDateString());

// Set (unique values)
let mySet = new Set([1, 2, 2, 3]);
console.log(mySet);

// Map (key-value pairs)
let myMap = new Map();
myMap.set("name", "Max");
myMap.set("role", "Developer");
console.log(myMap.get("role"));
