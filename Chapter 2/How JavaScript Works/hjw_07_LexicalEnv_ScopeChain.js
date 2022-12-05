const firstName = "Rudra"

const printName = function(){
    const lastName = "Pratap";
    console.log(firstName);
    console.log(lastName);
}

printName()

// Global Memory Creation Phase :-
// 1. Window object is created and all the processes are stored inside it.
// 2. this object is made equal to window object.
// 3. firstName variable is created and uninitialized.


// Code Execution Phase :-
// 1. firstName variable is initialized and given the value "Rudra".
// 2. Function Execution Phase :-

// A. Local Memory Creation Phase :-
// a. An argument object is created where all the data required for the function is stored. Here that object is empty as there is no prerequisites.
// b. printName variable is created and uninitialized.
// c. lastName variable is created and uninitialized.

// B. Local Code Execution Phase :-
// a. The printName function is executed.
// b. lastName variable is initialized and given the value "Pratap".
// c. The value of firstName variable is printed.
// d. The value of lastName variable is printed.

// Here function printName doesn't have firstName value present inside it so it doesn't stop and goes one step back to global scope and retrieves the value of firstName.
// This is called lexical function where the operator has to go to its previous/parent scope to retrieve required values. Also it may extend beyond the immediate parent.

const firstName1 = "Rudra"

const printName1 = function(){
    const lastName1 = "Pratap";
    function myFunc(){
        console.log(firstName1);
        console.log(lastName1);
    }
    myFunc()
}

printName1()

// Here the function myFunc has to go to parent of its immediate parent i.e. two steps to retrieve the value of firstName1.


