// Window is the global default object of JavaScript.
// It can also be called using this function.

console.log(window)
console.log(this)
console.log(this === window)

function myFunc(){
    console.log("Hello World")
}

myFunc()
window.myFunc()

// "use strict"
// Use strict mode is you don't want interference of window object in your program.

