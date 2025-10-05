// Generics in TypeScript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello TS Generics"));
console.log(identity<number>(2025));

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Max" }, { age: 23 });
console.log("Merged Object:", merged);
