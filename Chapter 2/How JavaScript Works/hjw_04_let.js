// TDZ - Temporal Dead Zone

// Call stack has the tracker and each instance is ran after calling into this stack.

console.log(firstName)
const firstName = "Nitika"
console.log(firstName)

// Uncaught Refernce Error
// Cannot access 'firstName' before initialization.
// The above error code shown on console window of browser.

console.log(secondName)
let secondName = "Survi"
console.log(secondName)

// Uncaught Refernce Error
// Cannot access 'secondName' before initialization.
// The above error code shown on console window of browser.

// Creation Phase :-
// 1. firstName variable is formed in global scope.
// 2. But the variable is uninitialized before that line of the code is executed.
// 3. Before Line 2 the variable secondName is in TDZ.

// CEP starts :-  
// 1. The error is displayed as access error before initialization.
// 2. The value of the variable is initialized here and it can be accessed from here.
// 3. The value of the variable is displayed as it can be accessed.

console.log(thirdName)
thirdName = "Parashnath"

// Uncaught Refernce Error
// thirdName is not defined
// The above error code shown on console window of browser.

// Creation Phase :-
// Nothing other than normal this object being made equal to window object.

// CEP starts :-
// 1. Not defined error displayed as the variable thirdName doesn't exist.

console.log(fourthName)
console.log(typeof fourthName)
let fourthName = "Diksha"

// Uncaught Refernce Error
// Cannot access 'fourthName' before initialization.

console.log(typeof fifthName)

// Here the output is undefined.

