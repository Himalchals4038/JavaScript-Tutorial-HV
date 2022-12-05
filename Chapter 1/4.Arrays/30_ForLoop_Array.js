let numbers = ["One", "Two", "Three", "Four", "Five", "Six"];
console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i].toUpperCase());
}

let numbers2 = [];

for (let j = 0; j < numbers.length; j++) {
  numbers2.push(numbers[j].toUpperCase());
}

console.log(numbers2);

// .length operator is used to determine the number of elements in the array.
