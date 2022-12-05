// First error type is undefined.
let firstName;
console.log(firstName);
console.log(typeof firstName);

var secondName
console.log(secondName, typeof secondName)
// console.log(typeof secondName)
// Undefined error is reported when we create a variable but don't assign any value to it.
secondName = "Arkadeep"
console.log(secondName, typeof secondName)

// const thirdName
// console.log(thirdName)
// console.log(typeof thirdName)
// But constants defined in JS have to be assigned a value or they will return SyntaxError.

// Second error type is null.
var errorFirst = null
console.log(errorFirst, typeof errorFirst)

let myNumber = 2635
console.log(Number.MAX_SAFE_INTEGER)
// The above number is the max threshold for which the number is called integer.
// Any number above it is called BIG INTEGER.

let firstNumber = BigInt(4865)
let secondNumber = 2588n
console.log(firstNumber, typeof firstNumber)
console.log(secondNumber, typeof secondNumber)
// Big Integer number can be represented by both BigInt(Number) and Number with a 'n' after it.

console.log(firstNumber + secondNumber)
// Big Numbers can have all types of mathematical functions operated on them.





