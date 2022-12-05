// console.log(this) --> 1
// console.log(window) --> 2
console.log(myFunc)
console.log(fullName)

function myFunc(){
    console.log("This is my function.")
}

var firstName = "Shikhar"
var lastName = "Dhawan"
var fullName = firstName + " " + lastName

console.log(fullName)


// Then Global Execution Context (GEC) starts.
// GEC has two parts :- a)Global Memory b)Code Execution Phase

// In the global scope/memory all the variables are created and stored.
// Window object is already stored in Global Memory before the initiation of GEC.
// When GEC starts this object is alloted to be equal to window object.
// firstName, lastName, fullName variables are created and alloted undefined values.
// myFunc function is also created and stored in the global memory.

// Then Code Execution Phase (CEP) starts :-

// 1 -->  prints window function as this object is equal window object.
// 2 --> prints window function.
// 3 --> prints the function 'myFunc'.
// 4 --> prints undefined as no value has been alloted to fullName variable.
// 5 --> nothing is executed as myFunc function value has been defined already.
// 6 --> firstName variable is alloted a value "Shikhar".
// 7 --> lastName variable is alloted a value "Dhawan".
// 8 --> fullName variable is alloted a function : firstName + ' ' + lastName.
// 9 --> fullName value is printed from its function as firstName & lastName value have already been alloted.

