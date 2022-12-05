function hello() {
    console.log("Hello Everyone")
}
hello()

// In JS we can consider function as both function and object.

console.log(hello.name)
// Name operator is used to state the name of the function.

hello.first = "One"
console.log(hello.first)
// As we can see that function can be used as an object here.
// Function provides more useful properties than object.

console.log(hello.prototype)
// This gives us a free space where we can insert, remove and modify functions.

// Only function has prototype properties.
if (hello.prototype){
    console.log("Prototype present")
}
else {
    console.log("Prototype not present")
}

// Object doesn't has prototype properties.
welcome = {
    intro : "Welcome to IIITL",
}
if (welcome.prototype){
    console.log("Prototype present")
}
else {
    console.log("Prototype not present")
}

// Arrays don't have prototype properties.
myArray = ["One", "Two", "Three", "Four"]
if (myArray.prototype){
    console.log("Prototype present")
}
else {
    console.log("Prototype not present")
}

// We can add any number of key value pairs in prototype.
hello.prototype.first = "One"
hello.prototype.second = "Two"
console.log(hello.prototype.first + " " + hello.prototype.second)

hello.prototype.third = function(){
    console.log("This is number Three")
}
hello.prototype.third()



