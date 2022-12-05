const myArray = [1, 2, 3, 4]
console.log(myArray)
console.log(Array.isArray(Array.prototype))

// Here the prototype is stored in the form of array.

const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray2)
console.log(Object.prototype)
console.log(Object.getPrototypeOf(myArray2))

// JS stores all the operations possible on an array or object inside its prototype.

// We can clear the prototype array using below code.
myArray.prototype = []

// We can even push new elements into the prototype array.
myArray.prototype.push(1)
console.log(myArray.prototype)



