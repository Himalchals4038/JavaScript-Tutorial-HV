console.log("Hello World")
let firstName = "Rajeev"
let lastName = "Sharma"

const myFunc = function(){
    let var1 = "First Variable";
    let var2 = "Second Variable";
    console.log(var1);
    console.log(var2);
}

// Call stack has the tracker and each instance is ran after calling into this stack.

// There are two parts of the execution context :- 
// 1. Global Execution Context(GEC)
// 2. Function Execution Context(FEC)

// 1. Early Error Checking Phase : No problems detected

// Creation Phase :-
// 1. firstName variable is formed but it will be in TDZ before execution of line 2.
// 2. Second name variable is formed but it will be in TDZ before execution of line 3.
// 3. myFunc function is created and its content is stored in the global scope.

// Code Execution Phase :-
// 1. Hello World is printed as output.
// 2. firstName is initialized and assigned a constant Rajeev.
// 3. lastName is initialized and assigned a constant Sharma.
// 4. Function Execution Context :-

// Local Memory Context Phase :
// a. Inside the myFunc function var1 variable is created but uninitialized.
// b. Inside the myFunc function var2 variable is created but uninitialized.

// Local Code Execution Phase :
// a. var1 is initialized and alloted a value "First Variable".
// b. var2 is initialized and alloted a value "Second Variable".
// c. The value of var1 is printed.
// d. The value of var2 is printed.


