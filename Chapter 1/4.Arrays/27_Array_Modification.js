let players = ["Jim", "Dan", "Tom", "Dick", "Samuel"];
console.log(players);
players.push("Rosh");
console.log(players);
// Push command is used to insert an element at the last of the array.

let numbers = ["One", "Two", "Three", "Four", "Fifth"];
console.log(numbers);
let poppedNumber = numbers.pop();
console.log(`Number popped out is ${poppedNumber}`);
console.log(numbers);
// Pop command is used to remove the last element of the array.
// The removed element can also be viewed using console.log command.

let digits = [26, 94, 36, 55, 76];
console.log(digits);
digits.unshift(3);
console.log(digits);
digits.unshift(15);
console.log(digits);
// Unshift command is used to add an element in front of Array.

removedDigit = digits.shift();
console.log(`Number shifted out is ${removedDigit}`);
removedDigit = digits.shift();
console.log(`Number shifted out is ${removedDigit}`);
// Shift command is used to remove elements from the beginning of the Array.
// The removed element can also be viewed just like Pop command.

// Push, Pop are faster than Shift, Unshift from processing POV.
