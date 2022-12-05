// Example 1
let inputNumber = 42;
let correctNumber = 46;

if (inputNumber > correctNumber) {
  output = "The given number is too high !!";
} else if (inputNumber < correctNumber) {
  output = "The given number is too low !!";
} else {
  output = "You have guessed the correct number !!";
}
console.log(output);

// Example 2
let inputTemperature = 28;

if (inputTemperature < 15) {
  output = "It is extremely cold outside.";
} else if (inputTemperature >= 15 && inputTemperature < 22) {
  output = "It is cold outside.";
} else if (inputTemperature >= 22 && inputTemperature < 28) {
  output = "It is normal temperature outside.";
} else if (inputTemperature >= 28 && inputTemperature < 32) {
  output = "It is hot outside.";
} else {
  output = "It is extremely hot outside.";
}
console.log(output);
