console.log(myFunc)

var myFunc = function(){
    console.log("This is my function.")
}
console.log(myFunc)
myFunc()

// GEC starts := 
// In Creation Phase
// 1. this object is made equal to window object. 
// 2. myFunc variable is created and stored in global scope.

// CEP starts :-
// 1. myFunc variable has no value alloted to it at first so output is undefined.
// 2. myFunc variable is alloted a function.
// 3. The function alloted to myFunc is printed.
// 4. myFunc() calls the function associated to it and gives the following output : "This is my function."



