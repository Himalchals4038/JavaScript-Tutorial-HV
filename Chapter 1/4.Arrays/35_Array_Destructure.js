const myArray = ["First", "Second", "Third", "Fourth", "Fifth"]

// let var1 = myArray[0]
// let var2 = myArray[1]
// let var3 = myArray[2]
// let var4 = myArray[3]
// let var5 = myArray[4]
// console.log(var1)
// console.log(var2)
// console.log(var3)
// console.log(var4)
// console.log(var5)
// Above method is not ideal for destructurizing of large arrays.

let [var1, var2, var3, var4, var5] = myArray
// We can allot a separate variable to each element of the array.

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)
console.log(var5)

// Also the values of the variables can be modified.
var1 = "Changed"
var2 = "Changed Again"
console.log(var1)
console.log(var2)

let [varA, varB, varC, , varD] = myArray

// If we don't specify variables to certain keys then those keys won't be alloted to any variable.
console.log(varA)
console.log(varB)
console.log(varC)
console.log(varD)

// let newArray = myArray.slice(2)
// console.log(newArray)

// Below is an alternate method other than slice.

let newArray
// newArray needs to be declared as an array beforehand.

[var6, var7, ...newArray] = myArray
console.log(var6)
console.log(var7)
console.log(newArray)
// Here we use spread operator to denote the remaining keys to the third variable.



