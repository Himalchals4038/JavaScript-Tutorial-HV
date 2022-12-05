// Function Execution Context (FEC) is a part of Global Execution Context (GEC).
// It is the set of processes how a function is executed in JS.

let var1 = "First"
console.log(var1)

function fullName (firstName, lastName) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
    let var2 = "Variable inside fullName function.";
    console.log(var2);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const person1 = fullName("Satish", "Dhawan")
console.log(person1)

// Call stack has the tracker and each instance is ran after calling into this stack.

// Memory Creation Phase :-
// 1. window object is created which contains all the functions and attributes required.
// 2. this object is created and made equal to the window object.
// 3. var1 variable is created but it remains uninitialized.
// 4. fullName function is stored as it is in the global scope.
// 5. person1 variable is formed but it remains uninitialized.

// Code Execution Phase :-
// 1. var1 variable is alloted a value "First".
// 2. The value of var1 variable is printed.

// 3. Function Execution Context (FEC) :-

// a. Local Memory Context Phase :-
// a1. Arguments are the firstName and lastName variables with index no.
// a2. var2 variable is created but remains uninitialized.
// a3. fullName variable is created but remains uninitialized.

// b. Local Code Execution Phase :-
// b1. Arguments of the function i.e. firstName and lastName are printed with index numbers 0 and 1 respectively.
// b2. var2 variable is assigned a value "Variable inside fullName function"
// b3. The value of var2 is printed.
// b4. fullName variable is assigned a function.
// b5. The value of fullName is returned with argument data present inside the function.

// 4. The variable person1 is assigned to the function fullName and provided with necessary data firstName and lastName.
// 5. The output will be as follows :-
// First
// [Arguments] { '0': 'Satish', '1': 'Dhawan' }
// Satish
// Dhawan
// 2
// Variable inside fullName function.
// Satish Dhawan



