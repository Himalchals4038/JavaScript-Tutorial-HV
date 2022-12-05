// Here we will be discussing how JS compiles and runs the codes that we write on the IDE.
// Also how the processing is done and output is generated.

// According to ECMA script we don't need to compile our code in JS but we need to do the following processes at first :-
// 1. Early Error Checking
// 2. Determining Appropriate Scope For Variables
// For doing the above functions, parsing is must.

// 1. Compilation Phase --> 
// A)Tokenizing/Lexing 
// B)Parsing 
// C)Code Generation

// A) In tokenizing/lexing the whole code is broken down into smaller chunks.
// B) In parsing we convert the chunks into machine executable form.

// After compilation an Abstract Syntax Tree(AST) is generated. 

// console.log(this)
// console.log(window)
// console.log(first)
// var first = "One"
// Here the output is undefined.

// console.log(this)
// console.log(window)
// console.log(second)
// let second = "Two"
// Here error code is shown that second variable is being called before initialization.

// Here first variable is stored in the global scope.

// console.log(this)
// console.log(window)

// console.log(first)
// var first = ."One"
// Here JS detects and instantly reports the early error in syntax.
// Not all errors are early errors, some are detected only after running the code.

console.log(first)
var first = "One"

// When a variable in JS is not in any function its inside the global scope.
// When JS detects a variable or constant it instantly checks the global scope for any other elements of the same name.

// console.log(second)
// let second = "Two"

// JavaScript is a synchronous programming language where the last line of code will never be executed before the first line.
// It is made asynchronous by some specific web browsers.

// Now is the next phase of execution i.e. Global Execution Context (GEC).
// The GEC has following phases :-
// 1. Creation Phase
// 2. Code Execution Phase

// console.log(this)
// console.log(window)
console.log(firstName)
var firstName = "Sumit"
console.log(firstName)

// The steps of executing the above code are as follows :-
// 1. Creation of firstName variable during Creation Phase as it is not present in global scope.
// 2. Running of Line 1. As this is a function present in global scope so it is displayed.
// 3. Running of Line 2. As window is a function present in global scope so it is displayed.
// 4. Running of Line 3. As firstName variable is present in global scope but it doesn't have any valur assigned to it so the output becomes undefined.
// 5. Running of Line 4. Here the firstName variable is given a value "Sumit"
// 6. Running of Line 5. As firstName variable is present in global scope so it is displayed. 


