// Es6
//Arrow Function
const add = (a, b) => a +b ;
console.log(add(5, 10));

// Template Literals
const course = "javascript";
console.log(`I am learning ${course}`);

// destructuring
const person = {name: "Max", age: 22};
const {name, age} = person;
console.log(name, age);

//Spread & Rest
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

function sum(...nums) {
    return nums.reduce((a, b) => a + b);

}
console.log(sum(1, 2, 3, 4));