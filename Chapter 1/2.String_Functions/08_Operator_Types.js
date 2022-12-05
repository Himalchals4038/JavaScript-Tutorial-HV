let firstName = "Sanjana";
let lastName = "Mathur";
let age = 18;
let myBirthDate = "29111976";

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);

// typeof function is used to determine the type of variable.

age = age + "";
console.log(typeof age);
// Number to string conversion method. Add any empty double quote after the variable name with a space and +.

myBirthDate = +myBirthDate;
console.log(typeof myBirthDate);
// String to number conversion method. Add a plus symbol before the variable name without any space.

myNumber = "16512185165";
myNumber = Number(myNumber);
console.log(typeof myNumber);
// This is another method to convert a string to a number.

myNumber = 16512185165;
myNumber = String(myNumber);
console.log(typeof myNumber);
// This is another method to convert a number to a string.
