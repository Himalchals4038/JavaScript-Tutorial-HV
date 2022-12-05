// let and const are block scope.
// var is a function scope.
// {} is used to define blocks.

{
    let firstName1 = "Santosh"
    let middleName1 = "Kumar"
    let lastName1 = "Shaw"
}

console.log(firstName1)
console.log(middleName1)
console.log(lastName1)

// Here we can see that values assigned by let can't be accessed outside the block.

{
    const firstName2 = "Shailesh"
    const middleName2 = "Singh"
    const lastName2 = "Rathore"
}

console.log(firstName2)
console.log(middleName2)
console.log(lastName2)

// Here we can see that values assigned by const can't be accessed outside the block.

{
    var firstName3 = "Venkatesh"
    var middleName3 = "Krishna"
    var lastName3 = "Ramalingam"
}

console.log(firstName3)
console.log(middleName3)
console.log(lastName3)

// Here we can see that values assigned by var can be accessed outside the block.

// This is the reason why let and const are declared as block scopes as they can only be accessed inside the block.
// Var on the other hand is a function and thus can be accessed both inside and outside the block.

// If we don't assign blocks to any block functions then they take the whole file 
// as their block and thus can be accessed anywhere inside the file.

if (true) {
    let first = "One"
    const second = "Two"
    var third = "Three"
    console.log(first, second, third)
}

console.log(first) //Error in output
console.log(second) //Error in output
console.log(third) //No error in output

