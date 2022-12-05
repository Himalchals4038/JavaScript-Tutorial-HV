//Let keyword is used to declare a variable in JS.

let firstNumber = "One";
console.log(firstNumber);

// The difference between var and let is that values assigned to variables using
// var can be modified whereas values assigned to variables using let cannot be modified.

var secondName = "Manish";
var secondName = "Danesh";
console.log(secondName);

// let thirdName = "Manish"
// let thirdName = "Danesh"
// console.log(secondName)
// Let cannot be used to modify the same variable multiple times.

let thirdName = "Manish";
thirdName = "Danesh";
console.log(secondName);


