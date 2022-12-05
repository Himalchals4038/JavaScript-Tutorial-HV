const numbers = ["One", "Two", "Three", "Four", "Five"];
console.log(numbers.length);

let i = 0;
let j = 0;

while (i < numbers.length) {
  console.log(numbers[i].toUpperCase());
  i++;
}

const numbers2 = [];

while (j < numbers.length) {
  numbers2.push(numbers[j].toUpperCase());
  j++;
}

console.log(numbers2);
