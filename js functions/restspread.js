
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };
//{ name: 'John', age: 30, city: 'New York' }


function add(a, b, c) {
  return a + b + c;
}

const numbers2 = [1, 2, 3];
const sum1 = add(...numbers2); // Equivalent to add(1, 2, 3)


// REST

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


